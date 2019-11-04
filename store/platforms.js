export const state = () => ({
  all: []
})

export const mutations = {
  set_platforms(state, platforms) {
    state.all = platforms
  }
}

export const getters = {
  get_all(state) {
    return state.all
  }
}

export const actions = {
  // async nuxtServerInit({ dispatch }) {
  //   await dispatch('platforms/fetchPlatforms')
  // },
  async fetchPlatforms({ commit }) {
    try {
      const { data } = await this.$axios.get('/platforms')
      commit('set_platforms', data.data)
    } catch (e) {
      console.error(e)
    }
  }
}
