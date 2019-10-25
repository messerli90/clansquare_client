<template>
  <section class="hero has-background-light is-large">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="#" class="box" @submit.prevent="submit">
              <div class="field">
                <label for="email" class="label">Email</label>
                <div class="control has-icons-left">
                  <input
                    v-model="form.email"
                    type="email"
                    class="input"
                    placeholder="e.g. john@gmail.com"
                    required
                  />
                  <span class="icon is-left">
                    <Fas i="envelope" classes="is-small" />
                  </span>
                </div>
              </div>
              <div class="field">
                <label for class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    v-model="form.password"
                    type="password"
                    placeholder="*******"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <Fas i="lock" classes="is-small" />
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="checkbox">
                  <input type="checkbox" />
                  Remember me
                </label>
              </div>
              <div class="field">
                <button class="button is-success">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Fas from '~/components/fonts/Fas'
export default {
  components: { Fas },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async submit() {
      await this.$auth.login({
        data: this.form
      })

      this.$router.push({
        path: '/' // TODO redirect to intended location
      })
    }
  }
}
</script>
