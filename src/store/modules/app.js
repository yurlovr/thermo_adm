export default {
  namespaced: true,
  state: {
    isAuth: false,
    isLoading: false,
    result: null
  },
  actions: {
    changeResult: ({ commit }, payload) => commit('CHANGE_RESULT', payload),
    setResult: ({ commit }, payload) => commit('SET_RESULT', payload),
    setIsLoading: ({ commit }, payload) => commit('SET_IS_LOADING', payload),
    setIsAuth: ({ commit }, payload) => commit('SET_IS_AUTH', payload),
  },
  mutations: {
    CHANGE_RESULT: () => {},
    SET_RESULT: (state, payload) => { state.result = payload.data },
    SET_IS_LOADING: (state, payload) => { state.isLoading = payload.data },
    SET_IS_AUTH: (state, payload) => { state.isAuth = payload.data },
  },
  getters: {
    getResult: state => state.result,
    getIsLoading: state => state.isLoading,
    getIsAuth: state => state.isAuth
  }
}
