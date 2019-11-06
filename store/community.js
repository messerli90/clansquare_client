export const state = () => ({
  community: {
    id: null,
    name: null,
    short_name: null,
    slug: null,
    body: null,
    minimum_age: null,
    website_url: null,
    facebook_url: null,
    twitter_url: null,
    twitch_url: null,
    youtube_url: null,
    steamgroup_url: null,
    avatar_url: null,
    avatar_thumb_url: null,
    banner_url: null,
    banner_thumb_url: null,
    has_discord: false,
    has_teamspeak: false,
    has_gameserver: false,
    has_events: false,
    view_count: null,
    owner_id: null,
    region_id: null,
    platform_id: null,
    invite_code: null,
    created_at: null,
    updated_at: null,
    deleted_at: null
  }
})

export const mutations = {
  set_community(state, community) {
    state.community = community
  }
}

export const getters = {
  get_community(state) {
    return state.community
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