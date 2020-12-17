<template>
  <panel title="My Current Demo Config">
    <div style="min-width: 30rem; margin: 0.5rem;">
      <b-loading :active="isLoading || isWorking" :is-full-page="false" />
      
      <config :model="mutableModel" />

      <!-- buttons -->
      <div class="buttons" style="display: flex; justify-content: flex-end; margin-top: 1rem;">
        <b-button
        type="is-primary"
        rounded
        @click="clickCreateTemplate"
        >
          Save As New Template
        </b-button>

        <b-button
        type="is-success"
        rounded
        @click="clickSave"
        >
          Save Current Demo Configuration
        </b-button>
      </div>
    </div>
    
    <!-- <pre>{{ model }}</pre> -->
  </panel>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Config from './config'

export default {
  components: {
    Config
  },

  data () {
    return {
      // model: {
      //   "vertical": "lowes",
      //   "async": true,
      //   "CiscoAppId": "cisco-chat-bubble-app",
      //   "DC": "produs1.ciscoccservice.com",
      //   "appPrefix": "",
      //   "orgId": "fbec4c81-3185-4614-9ba9-77d17c134b01",
      //   "templateId": "d705a7e0-5996-11ea-862b-05baf101fe3f",
      //   "phone": "+12142336226"
      // }
      mutableModel: {}
    }
  },

  computed: {
    ...mapGetters([
      'verticals',
      'templates',
      'loading',
      'working',
      'userDemoConfig'
    ]),
    isLoading () {
      return this.loading.user.details || this.loading.vertical.list
    },
    isWorking () {
      return this.working.user.demoConfig
    }
  },

  mounted () {
    this.updateCache()
  },

  watch: {
    userDemoConfig () {
      this.updateCache()
    }
  },

  methods: {
    ...mapActions([
      'createTemplate',
      'saveDemoConfig'
    ]),
    updateCache () {
      this.mutableModel = JSON.parse(JSON.stringify(this.userDemoConfig))
    },
    clickCreateTemplate () {
      this.$buefy.dialog.prompt({
        title: 'Create New Template',
        message: 'What do you want the name of your new template to be?',
        rounded: true,
        confirmText: 'Create Template',
        type: 'is-success',
        onConfirm: (name) => {
          const data = JSON.parse(JSON.stringify(this.mutableModel))
          this.createTemplate({name, data})
        }
      })
    },
    clickSave () {
      this.$buefy.dialog.confirm({
        title: 'Save Current Demo Configuration?',
        message: 'Are you sure you want to save your current demo configuration?',
        rounded: true,
        confirmText: 'Save Demo Configuration',
        type: 'is-success',
        onConfirm: () => {
          this.saveDemoConfig(this.mutableModel)
        }
      })
    }
  }
}
</script>
