<template>
  <div class="onboarding__welcome">
    <h1 class="title has-text-centered">
      Welcome
    </h1>
    <h2 class="subtitle has-text-centered">
      You're about to set up your ClanSquare profile
    </h2>
    <hr />
    <h3 class="subtitle has-text-centered">
      What would you like to do first?
    </h3>
    <div class="buttons">
      <button class="button is-primary is-medium">
        Create a Community
      </button>
      <button class="button is-secondary is-medium" @click.prevent="player">
        Setup Player Profile
      </button>
    </div>
    <form action="#" @submit.prevent="submit"></form>
  </div>
</template>

<script>
export default {
  methods: {
    player() {
      this.$store.commit('onboarding/set_step', 'playerProfile')
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons {
  display: flex;
  align-content: space-between;
  justify-content: center;
}
</style>
