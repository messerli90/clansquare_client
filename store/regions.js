export const state = () => ({
  all: []
})

export const mutations = {
  set_regions(state, regions) {
    state.all = regions
  }
}

export const getters = {
  get_all(state) {
    return state.all
  }
}

export const actions = {
  async fetchRegions({ commit }) {
    try {
      const { data } = await this.$axios.get('/regions')
      commit('set_regions', data.data)
    } catch (e) {
      console.error(e)
    }
  }
}
