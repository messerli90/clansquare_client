<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        ClanSquare
      </nuxt-link>
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="mainNavBar"
        @click.prevent="openMobileNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="mainNavBar" class="navbar-menu">
      <div class="navbar-start">
        <n-link to="/" class="navbar-item">
          Home
        </n-link>

        <n-link to="/communities" class="navbar-item">
          Communities
        </n-link>
      </div>

      <client-only class="navbar-end">
        <template v-if="!authenticated">
          <div class="navbar-item">
            <div class="buttons">
              <n-link to="/auth/signup" class="button is-primary">
                Sign Up
              </n-link>
              <n-link to="/auth/signin" class="button is-light">
                Log In
              </n-link>
            </div>
          </div>
        </template>
        <template v-if="authenticated">
          <a href="/" class="navbar-item">
            {{ user.name }}
          </a>
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-light" @click.prevent="logout">
                Sign Out
              </a>
            </div>
          </div>
        </template>
      </client-only>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$auth.logout()
    },
    openMobileNav() {
      document.querySelector('.navbar-burger').classList.toggle('is-active')
      document.querySelector('#mainNavBar').classList.toggle('is-active')
    }
  }
}
</script>
