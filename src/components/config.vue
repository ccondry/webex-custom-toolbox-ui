<template>
  <div>
    <!-- vertical -->
    <b-field label="Vertical" label-position="on-border">
      <b-select
      v-model="model.vertical"
      expanded
      >
        <option
        v-for="vertical of verticals"
        :key="vertical.id"
        :value="vertical.id"
        >
          {{ vertical.name }}
        </option>
      </b-select>
    </b-field>

    <!-- IMI Connect ID -->
    <b-field label="IMI Connect ID" label-position="on-border">
      <b-checkbox v-model="model.imiConnectId" />
    </b-field>

    <!-- async -->
    <b-field label="Async" label-position="on-border">
      <b-checkbox v-model="model.async" />
    </b-field>

    <!-- CiscoAppId -->
    <b-field label="Cisco App ID" label-position="on-border">
      <b-input v-model="model.CiscoAppId" />
    </b-field>

    <!-- DC -->
    <b-field label="Datacenter" label-position="on-border">
      <b-input v-model="model.DC" />
    </b-field>

    <!-- appPrefix -->
    <b-field label="App Prefix" label-position="on-border">
      <b-input v-model="model.appPrefix" />
    </b-field>

    <!-- orgId -->
    <b-field label="Org ID" label-position="on-border">
      <b-input v-model="model.orgId" />
    </b-field>

    <!-- templateId -->
    <b-field label="Chat Template ID" label-position="on-border">
      <b-input v-model="model.templateId" />
    </b-field>

    <!-- phone -->
    <b-field label="Phone Number" label-position="on-border">
      <b-input v-model="model.phone" />
    </b-field>

    <!-- email -->
    <b-field label="Destination Email Address" label-position="on-border">
      <b-input v-model="model.email" />
    </b-field>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    model: {
      required: true,
      type: Object
    }
  },

  computed: {
    ...mapGetters([
      'verticals'
    ])
  }
}
</script>