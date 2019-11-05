<template>
  <div class="onboarding__welcome has-text-centered">
    <h1 class="title">
      Welcome
    </h1>
    <h2 class="subtitle">
      You're about to set up your ClanSquare profile
    </h2>
    <hr />
    <h3 class="subtitle">
      What describes you best?
    </h3>
    <div class="buttons">
      <button
        class="button is-link is-large"
        @click.prevent="setType('community')"
      >
        Community Owner
      </button>
      <button
        class="button is-primary is-large"
        @click.prevent="setType('player')"
      >
        Player
      </button>
    </div>
    <p class="is-small">
      This is just a helpful
    </p>
    <form action="#" @submit.prevent="submit"></form>
  </div>
</template>

<script>
export default {
  methods: {
    setType(type) {
      this.$store.commit('onboarding/set_type', type)
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
