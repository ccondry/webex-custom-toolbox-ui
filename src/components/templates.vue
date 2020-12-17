<template>
  <panel
  title="My Config Templates"
  aria-id="templates"
  >
    <div style="min-width: 30rem; margin: 0.5rem;">
      <!-- templates -->
      <b-field
      label="Choose a Template"
      label-position="on-border"
      >
        <b-select
        v-model="selectedTemplateId"
        expanded
        >
          <option
          selected
          disabled
          default
          :value="null"
          >
            Choose a Template
          </option>
          <option
          v-for="t of templates"
          :key="t._id"
          :value="t._id"
          >
            {{ t.name }}
          </option>
        </b-select>
      </b-field>
      
      <div v-if="selectedTemplate">
        <p class="subtitle">
          Template Data:
        </p>
        <!-- name -->
        <b-field label="Name" label-position="on-border">
          <b-input v-model="mutableTemplate.name" />
        </b-field>

        <!-- type -->
        <!-- <b-field label="Type" label-position="on-border">
          <div class="control">
            {{ mutableTemplate.type }}
          </div>
        </b-field> -->

        <!-- owner -->
        <!-- <b-field label="Owner" label-position="on-border">
          <div class="control">
            {{ mutableTemplate.owner }}
          </div>
        </b-field> -->

        <!-- config data -->
        <config :model="mutableTemplateData" />
      </div>
    </div>

    <!-- buttons -->
    <div
    v-if="selectedTemplateId"
    class="buttons"
    style="display: flex; justify-content: flex-end; margin-top: 1rem; margin-bottom: 0.25rem;"
    >
      <b-button
      type="is-success"
      rounded
      @click="clickSaveCurrent"
      >
        Save As Current Configuration
      </b-button>

      <b-button
      type="is-danger"
      rounded
      @click="clickDelete"
      >
        Delete Template
      </b-button>

      <b-button
      type="is-success"
      rounded
      @click="clickSaveTemplate"
      >
        Save Template
      </b-button>
    </div>
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
      selectedTemplateId: null,
      mutableTemplate: {}
    }
  },

  computed: {
    ...mapGetters([
      'templates'
    ]),
    selectedTemplate () {
      try {
        return this.templates.find(v => v._id === this.selectedTemplateId)
      } catch (e) {
        return null
      }
    },
    mutableTemplateData () {
      return this.mutableTemplate.data || {}
    }
  },

  watch: {
    selectedTemplate (val) {
      // copy the selected template data
      try {
        this.mutableTemplate = JSON.parse(JSON.stringify(this.selectedTemplate))
      } catch (e) {
        // do nothing
      }
    }
  },

  methods: {
    ...mapActions([
      'saveTemplate',
      'deleteTemplate',
      'saveDemoConfig'
    ]),
    clickSaveCurrent () {
      this.$buefy.dialog.confirm({
        title: 'Save Current Demo Configuration?',
        message: `Are you sure you want to save your current demo configuration?`,
        type: 'is-success',
        confirmText: 'Save Demo Configuration',
        rounded: true,
        onConfirm: () => {
          this.saveDemoConfig(this.mutableTemplateData)
        }
      })
    },
    clickDelete () {
      this.$buefy.dialog.confirm({
        title: 'Delete template?',
        message: `Are you sure you want to delete the <b>${this.selectedTemplate.name}</b> template?`,
        type: 'is-danger',
        confirmText: 'Delete Template',
        rounded: true,
        onConfirm: () => {
          this.deleteTemplate(this.selectedTemplateId)
        }
      })
    },
    clickSaveTemplate () {
      this.$buefy.dialog.confirm({
        title: 'Save template?',
        message: `Are you sure you want to save the <b>${this.selectedTemplate.name}</b> template?`,
        type: 'is-success',
        confirmText: 'Save Template',
        rounded: true,
        onConfirm: () => {
          this.saveTemplate(this.mutableTemplate)
        }
      })
    }
  }
}
</script>