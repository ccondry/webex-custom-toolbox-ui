<template>
  <section class="main">
    <!-- welcome -->
    <welcome />

    <!-- my config -->
    <my-config />

    <!-- debug -->
    <!-- <debug /> -->

    <!-- Copyright and version footer -->
    <app-footer style="margin-bottom: 1rem;" />
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Welcome from '../components/welcome'
// import Debug from '../components/debug'
import AppFooter from '../components/app-footer'
import MyConfig from '../components/my-config'

export default {
  components: {
    Welcome,
    // Debug,
    AppFooter,
    MyConfig
  },

  computed: {
    ...mapGetters([
      'isLoggedIn',
      'jwtUser',
      'loading',
      'working'
    ])
  },

  methods: {
    ...mapActions([
    ]),
    clickAdmin () {
      this.$router.push({name: 'Admin'}).catch(e => {})
    },
    clicksetUserPassword () {
      this.$buefy.dialog.prompt({
        title: 'Reset Password',
        message: 'Choose your new password',
        inputAttrs: {
          type: 'password',
          placeholder: 'Your New Password',
          'aria-placeholder': 'Your New Password'
        },
        confirmText: 'Submit',
        rounded: true,
        onConfirm: (password) => {
          this.setUserPassword({
            username: this.jwtUser.email,
            password
          })
        },
        type: 'is-success'
      })
    }
  }
}
</script>
