<template>
  <div>
    <!-- top navbar -->
    <navbar />
    <!-- loading -->
    <!-- <b-loading :active="isLoading" :is-full-page="true" /> -->
    <!-- main -->
    <div
    v-if="isLoggedIn"
    id="main-container"
    class="container is-fluid is-marginless app-content"
    >
      <!-- vue-router container -->
      <transition
      mode="out-in"
      enter-active-class="fadeIn"
      leave-active-class="fadeOut"
      appear
      >
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
import Navbar from './components/navbar'

export default {
  components: {
    Navbar
  },

  computed: {
    ...mapGetters([
      'isLoggedIn',
      'isAdmin',
      'jwtUser'
    ])
  },

  watch: {
    isLoggedIn (val, oldVal) {
      if (val && !oldVal) {
        // user just logged in
      } else if (!val && oldVal) {
        // user just logged out. make them log in again.
        this.login()
      }
    }
  },

  mounted () {
    // try to find and validate user's JWT from localStorage,
    // or start the SSO login process to get one
    this.checkJwt()
    // get the REST API version
    this.getApiVersion()
    // get verticals list
    this.getVerticals()
  },

  methods: {
    ...mapActions([
      'checkJwt',
      'getApiVersion',
      'login',
      'getVerticals'
    ]),
    clickAdmin () {
      // navigate user to the toolbox management website
      window.location = '/management'
    },
    clickHome () {
      // navitagate to the toolbox landing page
      window.location = '/'
    }
  }
}
</script>
