export const state = () => ({
  step: 'welcome',
  player: {
    platform: null,
    region: null
  },
  community: {}
})

export const mutations = {
  set_step(state, step) {
    state.step = step
  },
  set_community(state, community) {
    state.community = community
  },
  set_platform(state, platform) {
    state.player.platform = platform
  },
  set_region(state, region) {
    state.player.region = region
  }
}

export const getters = {
  get_player(state) {
    return state.player
  },
  get_step(state) {
    return state.step
  }
}

export const actions = {}
