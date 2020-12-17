const actions = {
  async joinSupportRoom ({dispatch, getters}, personEmail) {
    dispatch('fetch', {
      group: 'webex',
      type: 'joinSupportRoom',
      url: getters.endpoints.webex,
      options: {
        method: 'POST',
        body: {personEmail}
      }
    })
  }
}

export default {
  actions
}