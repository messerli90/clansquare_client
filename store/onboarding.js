export const state = () => ({
  player: {
    platform: null
  }
})

export const mutations = {
  set_platform(state, platform) {
    state.player.platform = platform
  }
}

export const getters = {
  get_player(state) {
    return state.player
  }
}

export const actions = {}
