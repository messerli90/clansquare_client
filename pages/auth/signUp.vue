<template>
  <section class="hero has-background-light is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-5-widescreen">
            <form action="#" class="box" @submit.prevent="submit">
              <h1 class="is-size-3 has-text-centered">
                Register
              </h1>
              <div class="field p-l-lg p-r-lg p-b-md p-t-md">
                <label for="email" class="label">Email</label>
                <div class="control has-icons-left">
                  <input
                    v-model="form.email"
                    :class="{ 'is-danger': errors.email }"
                    type="email"
                    class="input is-medium"
                    placeholder="e.g. johnwick@gmail.com"
                  />
                  <span class="icon is-left">
                    <Fas i="envelope" classes="is-small" />
                  </span>
                </div>
                <ValidationErrorHelper :error-bag="errors" field="email" />
              </div>
              <div class="field p-l-lg p-r-lg p-b-md">
                <label for="name" class="label">Username</label>
                <div class="control has-icons-left">
                  <input
                    v-model="form.name"
                    :class="{ 'is-danger': errors.name }"
                    type="text"
                    class="input is-medium"
                    placeholder="e.g. JohnWick"
                  />
                  <span class="icon is-left">
                    <Fas i="envelope" classes="is-small" />
                  </span>
                </div>
                <ValidationErrorHelper :error-bag="errors" field="name" />
              </div>
              <div class="field p-l-lg p-r-lg p-b-md">
                <label for="password" class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    v-model="form.password"
                    :class="{ 'is-danger': errors.password }"
                    type="password"
                    placeholder="*******"
                    class="input is-medium"
                  />
                  <span class="icon is-small is-left">
                    <Fas i="lock" classes="is-small" />
                  </span>
                </div>
                <ValidationErrorHelper :error-bag="errors" field="password" />
              </div>
              <div class="field p-l-lg p-r-lg p-b-md">
                <label for="password_confirmation" class="label">
                  Confirm Password
                </label>
                <div class="control has-icons-left">
                  <input
                    v-model="form.password_confirmation"
                    :class="{ 'is-danger': errors.password_confirmation }"
                    type="password"
                    placeholder="*******"
                    class="input is-medium"
                  />
                  <span class="icon is-small is-left">
                    <Fas i="lock" classes="is-small" />
                  </span>
                </div>
              </div>
              <div class="field p-l-lg p-r-lg p-b-md">
                <button
                  class="button is-success is-fullwidth is-large"
                  :class="{ 'is-loading': sending }"
                  :disabled="!!sending"
                >
                  Register
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
import ValidationErrorHelper from '~/components/validation/ValidationErrorHelper'

export default {
  auth: 'guest',
  components: { Fas, ValidationErrorHelper },
  data() {
    return {
      sending: false,
      form: {
        email: '',
        username: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    submit() {
      this.sending = true
      this.$axios
        .post('auth/register', this.form)
        .then((res) => {
          this.$auth
            .loginWith('local', {
              data: this.form
            })
            .then((_) => {
              this.$router.push({
                path: '/dashboard/welcome'
              })
            })
            .catch((_) => {
              this.sending = false
            })
        })
        .catch((_) => {
          this.sending = false
        })
    }
  }
}
</script>
