import Vue from 'vue'
import Vuex from 'vuex'
import appModule from './modules/app'
import loginModule from './modules/login'
import appController from './controllers/appController'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app: appModule,
    login: loginModule
  },
  plugins: [
    appController()
  ]
})
