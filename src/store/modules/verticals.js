import * as types from '../mutation-types'

const state = {
  verticals: []
}

const mutations = {
  [types.SET_VERTICALS] (state, data) {
    state.verticals = data
  }
}

const getters = {
  verticals: state => state.verticals
}

const actions = {
  async getUser ({dispatch, getters}) {
    await dispatch('fetch', {
      group: 'vertical',
      type: 'list',
      url: getters.endpoints.vertical,
      options: {
        query: {
          summary: true,
          owner: getters.jwtUser.username
        }
      },
      message: 'get verticals list',
      mutation: types.SET_VERTICALS
    })
  }
}

export default {
  actions,
  state,
  getters,
  mutations
}
