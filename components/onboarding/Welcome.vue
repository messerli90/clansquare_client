<template>
  <div class="onboarding__welcome">
    <h1 class="title has-text-centered">
      Welcome
    </h1>
    <h2 class="subtitle has-text-centered">
      You're about to set up your ClanSquare profile
    </h2>
    <hr />
    <div class="buttons">
      <button class="button is-primary is-large">
        Create a Community
      </button>
      <button class="button is-secondary is-large" @click.prevent="player">
        Customize Gamer Profile
      </button>
    </div>
    <form action="#" @submit.prevent="submit"></form>
  </div>
</template>

<script>
export default {
  methods: {
    player() {
      this.$store.commit('onboarding/set_step', 2)
    }
  }
}
</script>
