export const state = () => ({
  step: 1,
  player: {
    platform: null,
    region: null
  }
})

export const mutations = {
  set_step(state, step) {
    state.step = step
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
