const getters = {
  endpoints: (state, getters) => {
    let authUrlBase

    if (getters.isProduction) {
      authUrlBase = '/api/v1/auth'
    } else {
      // auth API
      authUrlBase = 'http://localhost:3032/api/v1/auth'
    }

    return {
      webex: authUrlBase + '/resource/joinGeneralSupportRoom',
      version: authUrlBase + '/version',
      logout: authUrlBase + '/logout',
      vertical: 'https://mm.cxdemo.net/api/v1/verticals',
      user: authUrlBase + '/user'
    }
  },
  defaultRestOptions: (state, getters) => {
    return {
      headers: {
        Authorization: 'Bearer ' + getters.jwt
      }
    }
  }
}

export default {
  getters
}