<template>
  <div id="app">
    <Auth v-if="!getIsAuth && !getIsLoading"/>
    <TableResult v-else-if="getIsAuth && !getIsLoading"
                :result="getResult"
    />
    <div v-else class="wrapper_loader">
      <div class="spinner">
        <p class="spinner_text">
          Loading
        </p>
        <pulse-loader class="spinner_dot" :loading="getIsLoading" :color="'#a46bfe'" :size="'15px'"></pulse-loader>
      </div>
    </div>
  </div>
</template>

<script>
import Auth from './components/Auth'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
import TableResult from './components/TableResult'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Auth,
    PulseLoader,
    TableResult
  },
  computed: {
    ...mapGetters('app', [
      'getIsAuth',
      'getIsLoading',
      'getResult'
    ]),
    isAuth: function () {
      return this.getIsAuth
    }
  }
}
</script>

<style lang="scss">
@import './assets/app.scss';
.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -100%);
  &_text {
    text-shadow: 2px 1px 2px #000000a1;
    font-size: 35px;
    color: #72bcff;
  }
  &_dot {
    margin-left: 25%;
  }
}
.wrapper_loader {
  height: calc(100vh - 32px);
}
</style>
