<template>
  <panel title="Demo Website" aria-id="demo-website">
    <p>
      Click this button to go to the branded demo website.
    </p>
    <b-field>
      <b-button
      tag="a"
      :href="demoLink"
      target="_blank"
      type="is-success"
      rounded
      expanded
      >
        Go to the Demo Website
      </b-button>
    </b-field>
  </panel>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'jwtUser'
    ]),
    demoLink () {
      return `https://mm-brand.cxdemo.net/?session=custom&datacenter=webex&userId=${this.jwtUser.id}`
    }
  },

  methods: {
    ...mapActions([
      'joinSupportRoom'
    ])
  }
}
</script>