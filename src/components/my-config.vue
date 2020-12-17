<template>
  <panel title="My Demo Config">
    <div style="min-width: 30rem;">
      <b-field label="Vertical" label-position="on-border">
        <b-select v-model="model.vertical">
          <option
          v-for="vertical of verticals"
          :key="vertical._id"
          >
            {{ vertical.name }}
          </option>
        </b-select>
      </b-field>
      <b-field label="Async" label-position="on-border">
        <b-checkbox v-model="model.async" />
      </b-field>
      <b-field label="Cisco App ID" label-position="on-border">
        <b-input v-model="model.CiscoAppId" />
      </b-field>
      <b-field label="Datacenter" label-position="on-border">
        <b-input v-model="model.DC" />
      </b-field>
      <b-field label="App Prefix" label-position="on-border">
        <b-input v-model="model.appPrefix" />
      </b-field>
      <b-field label="Org ID" label-position="on-border">
        <b-input v-model="model.orgId" />
      </b-field>
      <b-field label="Chat Template ID" label-position="on-border">
        <b-input v-model="model.templateId" />
      </b-field>
      <b-field label="Phone Number" label-position="on-border">
        <b-input v-model="model.phone" />
      </b-field>
    </div>
    
    <!-- <pre>{{ model }}</pre> -->
  </panel>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      model: {
        "vertical": "lowes",
        "async": true,
        "CiscoAppId": "cisco-chat-bubble-app",
        "DC": "produs1.ciscoccservice.com",
        "appPrefix": "",
        "orgId": "fbec4c81-3185-4614-9ba9-77d17c134b01",
        "templateId": "d705a7e0-5996-11ea-862b-05baf101fe3f",
        "phone": "+12142336226"
      }
    }
  },

  computed: {
    ...mapGetters([
      'verticals'
    ])
  }
}
</script>
