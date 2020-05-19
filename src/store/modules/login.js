export default {
  namespaced: true,
  state: {
    login: '',
    password: ''
  },
  actions: {
    setLogin: ({ commit }, payload) => commit('SET_LOGIN', payload),
    setPassword: ({ commit }, payload) => commit('SET_PASSWORD', payload),
    setAuth: ({ commit }, payload) => commit('SET_AUTH', payload),
  },
  mutations: {
    SET_AUTH: () => {},
    SET_LOGIN: (state, payload) => { state.login = payload.data },
    SET_PASSWORD: (state, payload) => { state.password = payload.data },
  },
  getters: {
    getLogin: state => state.login,
    getPassword: state => state.password,
  }
}
