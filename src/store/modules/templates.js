import * as types from '../mutation-types'
import {ToastProgrammatic as Toast} from 'buefy/src'

const state = {
  templates: []
}

const mutations = {
  [types.SET_TEMPLATES] (state, data) {
    state.templates = data
  }
}

const getters = {
  templates: state => state.templates
}

const actions = {
  getTemplates ({dispatch, getters}) {
    dispatch('fetch', {
      group: 'template',
      type: 'list',
      url: getters.endpoints.template,
      message: 'get templates list',
      mutation: types.SET_TEMPLATES
    })
  },
  async createTemplate ({dispatch, getters}, body) {
    const response = await dispatch('fetch', {
      group: 'template',
      type: 'create',
      url: getters.endpoints.template,
      options: {
        method: 'POST',
        body
      },
      message: 'create template',
      showNotification: true
    })
    if (response instanceof Error) {
    } else {
      // refresh data
      dispatch('getTemplates')
    }
  },
  async saveTemplate ({dispatch, getters}, body) {
    const response = await dispatch('fetch', {
      group: 'template',
      type: body._id,
      url: getters.endpoints.template + '/' + body._id,
      options: {
        method: 'PUT',
        body
      },
      message: 'save template',
      showNotification: true
    })
    if (response instanceof Error) {
    } else {
      // refresh data
      dispatch('getTemplates')
    }
  },
  async deleteTemplate ({dispatch, getters}, id) {
    const response = await dispatch('fetch', {
      group: 'template',
      type: id,
      url: getters.endpoints.template + '/' + id,
      options: {
        method: 'DELETE'
      },
      message: 'delete template',
      showNotification: true
    })
    if (response instanceof Error) {
    } else {
      // refresh data
      dispatch('getTemplates')
    }
  }
}

export default {
  actions,
  state,
  getters,
  mutations
}
