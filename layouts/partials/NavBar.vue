<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
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
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">Home</a>

        <a class="navbar-item">Documentation</a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">More</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">About</a>
            <a class="navbar-item">Jobs</a>
            <a class="navbar-item">Contact</a>
            <hr class="navbar-divider" />
            <a class="navbar-item">Report an issue</a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div v-if="!authenticated" class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <n-link to="/auth/signin" class="button is-light">
              Log In
            </n-link>
          </div>
        </div>
        <div v-else class="navbar-item">
          {{ user.name }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    ...mapGetters({
      loggedIn: 'auth/authenticated'
    })
  }
}
</script>
