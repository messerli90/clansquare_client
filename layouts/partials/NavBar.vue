<template>
  <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="https://bulma.io/images/bulma-logo.png"
          width="112"
          height="28"
        />
      </a>
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

      <div class="navbar-end">
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
          <div class="navbar-item">
            <div class="buttons">
              <a href="/" class="button is-text">
                {{ user.name }}
              </a>
              <a class="button is-light" @click.prevent="logout">
                Sign Out
              </a>
            </div>
          </div>
        </template>
        <template v-else>
          <div class="navbar-item">
            <div class="buttons"></div>
          </div>
        </template>
      </div>
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
