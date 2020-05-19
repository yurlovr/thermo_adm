<template>
  <div class="auth">
    <form class="form">
      <p class="header">
        Вход
      </p>
      <label class="label">
        <span class="text">
          Email
        </span>
        <input type="text"
              class="input"
              v-model="login"
              placeholder="email@mail.ru"
              autocomplete="off"
        />
      </label>
      <label class="label">
        <span class="text">
          Password
        </span>
        <input type="password"
              class="input"
              v-model="password"
              placeholder="password"
              autocomplete="off"
        />
      </label>
      <button class="button button_main"
              @click.prevent="auth"
              :disabled="disabledButton() || !loginValid()"
      >
        LogIn
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import uuid from 'uuid'

const EMAIL_PATTERN = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

export default {
name: 'Auth',
data() {
  return {
    disabled: true
  }
},
computed: {
  ...mapGetters('login', [
    'getLogin',
    'getPassword'
  ]),
  login: {
    get () {
      return this.getLogin
    },
    set (val) {
      this.setLogin({
        meta: uuid(),
        data: val
      })
    }
  },
  password: {
    get () {
      return this.getPassword
    },
    set (val) {
      this.setPassword({
        meta: uuid(),
        data: val
      })
    }
  },
},
methods: {
  ...mapActions('login', [
    'setLogin',
    'setPassword',
    'setAuth'
  ]),
  auth: function () {
    this.setAuth({
      meta: uuid()
    })
  },
  disabledButton: function () {
    return !this.getLogin || !this.getPassword
  },
  loginValid: function() {
    return EMAIL_PATTERN.test(this.getLogin)
  }
}
}
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;
  margin-bottom: 22%;
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
  padding: 25px;
  color: #FFFFFF;
  min-width: 500px;
  border-radius: 20px;
  background-image: linear-gradient(309.1deg, #63E2FF 25.59%, #A966FE 100%);
  box-shadow: -1px 2px 3px 3px #9d74fe;
}
.button_main {
  margin-top: 20px;
  &[disabled] {
    background-color: grey;
    box-shadow: 0px 0px 7px 4px #844c4c;
    color: #FFFFFF;
  }
}
.header {
  font-size: 35px;
  margin-bottom: 20px;
  margin-top: 0;
}
.label {
  display: flex;
  flex-direction: column;
  font-size: 25px;
  & + .label {
    margin-top: 20px;
  }
  & .text {
    padding-left: 15px;
    margin-bottom: 5px;
  }
}
.input {
  border: none;
  font-size: 25px;
  border-radius: 20px;
  padding: 5px;
  padding-left: 15px;
  box-shadow: 1px 2px 5px 1px rgba(0, 0, 0, 0.4);
}

</style>