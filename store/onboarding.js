export const state = () => ({
  step: 'info',
  type: 'welcome',
  loading: false,
  player: {},
  community: {}
})

export const mutations = {
  set_step(state, step) {
    state.step = step
  },
  set_type(state, type) {
    state.type = type
  },
  set_loading(state, loading) {
    state.loading = loading
  },
  set_community(state, community) {
    state.community = community
  },
  set_platform(state, platform) {
    state.player.platform = platform
  },
  set_region(state, region) {
    state.player.region = region
  },
  set_community_name(state, name) {
    state.community.name = name
  },
  set_community_short_name(state, shortName) {
    state.community.short_name = shortName
  },
  set_community_body(state, body) {
    state.community.body = body
  },
  set_community_region(state, regionId) {
    state.community.region_id = regionId
  },
  set_community_platform(state, platformId) {
    state.community.platform_id = platformId
  }
}

export const getters = {
  get_player(state) {
    return state.player
  },
  get_community(state) {
    return state.community
  },
  get_step(state) {
    return state.step
  },
  get_type(state) {
    return state.type
  },
  get_loading(state) {
    return state.loading
  }
}

export const actions = {
  async check_user_community({ commit, state }) {
    try {
      const { data } = await this.$axios.get(`/users/${this.$auth.user.id}`)
      commit('set_community', data.data.community)
    } catch (err) {
      console.error(err)
    }
  },
  async createOrUpdateCommunity({ commit, state }) {
    const communityId = state.community.id
    if (communityId !== undefined || communityId != null) {
      try {
        const { data } = await this.$axios.put(
          `/communities/${communityId}`,
          state.community
        )
        commit('set_community', data.data)
      } catch (err) {
        console.error(err)
        return false
      }
    } else {
      try {
        const { data } = await this.$axios.post(
          '/communities/',
          state.community
        )
        commit('set_community', data.data)
      } catch (err) {
        console.error(err)
        return false
      }
    }
    return state.community
  }
}
