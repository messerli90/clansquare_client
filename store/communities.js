export const state = () => ({
  COMMUNITIES_LIST: []
})

export const mutations = {
  SET_COMMUNITIES(state, communities) {
    state.COMMUNITIES_LIST = communities
  }
}

export const getters = {
  GET_COMMUNITIES(state) {
    return state.COMMUNITIES_LIST
  }
}

export const actions = {
  // nuxtServerInit({ commit }, { req }) {
  //   this.$axios.get('/communities').then((res) => {
  //     commit('SET_COMMUNITIES', res.data.data)
  //   })
  // },
  async GET_ALL({ commit }) {
    try {
      const { data } = await this.$axios.get('/communities')
      commit('SET_COMMUNITIES', data.data)
    } catch (e) {
      console.error(e)
    }
  }
}
