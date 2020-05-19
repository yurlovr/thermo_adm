import ApiData from '../../api/api'
const host = 'https://testtempserv.herokuapp.com/api/'

const api = new ApiData(host) //'https://testtempserv.herokuapp.com/api/ http://localhost:3000/api/

export default function () {
  return store => {
    let dispatch = store.dispatch
    let getter = store.getters
    let subscribe = false
    store.subscribe((mutation) => {
      let payload = mutation.payload
      let options = null
      const subscription = () => {
        api.call('subscribe', {}, getter['app/getIsAuth'])
          .then(res => {
            subscribe = true
            dispatch('app/setResult', {
              meta: payload.meta,
              data: getter['app/getResult'].reverse().concat({...res, image: host + 'images/' + res.image}).reverse()
            })
          }).catch(e => {
            console.log(e)
            subscription()
          })
      }
      switch (mutation.type) {
            case 'login/SET_AUTH':
              dispatch('app/setIsLoading', {
                meta: payload.meta,
                data: true
              })
              api.call('isAdmin', {
                email: getter['login/getLogin'],
                password: getter['login/getPassword']
              })
              .then(res => {
                if (res.error) {
                  throw new Error(res.error)
                }
                dispatch('app/setIsAuth', {
                  meta: payload.meta,
                  data: res.token
                })
                dispatch('login/setLogin', {
                  meta: payload.meta,
                  data: ''
                })
                dispatch('login/setPassword', {
                  meta: payload.meta,
                  data: ''
                })
              })
              .catch(error => {
                setTimeout(() => {
                  dispatch('login/setLogin', {
                    meta: payload.meta,
                    data: ''
                  })
                  dispatch('login/setPassword', {
                    meta: payload.meta,
                    data: ''
                  })
                  dispatch('app/setIsLoading', {
                    meta: payload.meta,
                    data: false
                  })
                  console.log(error)
                }, 2000)
              })
            break
            case 'app/SET_IS_AUTH':
              if (payload.data) {
                api.call('allMeasurement', {}, payload.data)
                .then(res => {
                  if (res.error) {
                    throw new Error(res.error)
                  }
                  setTimeout(() => {
                    dispatch('app/setResult', {
                      meta: payload.meta,
                      data: setItems(res.data)
                    })
                    dispatch('app/setIsLoading', {
                      meta: payload.meta,
                      data: false
                    })
                }, 2000)
                })
                .catch(() => {
                  setTimeout(() => {
                    dispatch('app/setIsLoading', {
                      meta: payload.meta,
                      data: false
                    })
                  }, 2000)
                })
                subscription(payload.data)
              }
              break
              case 'app/CHANGE_RESULT':
              options = payload.data === 'all' ? {} : { date: payload.data}
                api.call('allMeasurement', options, getter['app/getIsAuth'])
                .then(res => {
                  if (res.error) {
                    throw new Error(res.error)
                  }
                  dispatch('app/setResult', {
                    meta: payload.meta,
                    data: setItems(res.data)
                  })
                })
                .catch((e) => console.log(e))
                break
              case 'app/SET_RESULT':
                if (subscribe) {
                  subscribe = false
                  subscription(payload.data)
                }
                break
      }
    })
  }
}

function setItems (items) {
  return items.map(item => {
    const { image } = item
    return {
      ...item,
      image: host +'images/' + image
    }
  }).reverse()
}
