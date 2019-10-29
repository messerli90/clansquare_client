<template>
  <section class="hero has-background-light is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-9-tablet is-8-desktop is-7-widescreen">
            <div class="box">
              <h1 class="title has-text-centered">
                Welcome
              </h1>
              <h2 class="subtitle has-text-centered">
                Let's setup your profile
              </h2>
              <form action="#" @submit.prevent="submit"></form>
            </div>
            <p class="is-small has-text-centered">
              You can <nuxt-link to="/dashboard">skip</nuxt-link>
              this step and go straight to your profile
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    submit() {}
  }
}
</script>
