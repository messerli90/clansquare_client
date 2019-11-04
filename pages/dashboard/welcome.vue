<template>
  <section class="hero has-background-light is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-9-tablet is-8-desktop is-7-widescreen">
            <div class="box">
              <OnboardingWelcome v-show="page == 1"></OnboardingWelcome>
              <OnboardingPlayerProfile v-show="page == 2">
              </OnboardingPlayerProfile>
            </div>
            <p class="is-small has-text-centered">
              You can
              <nuxt-link to="/dashboard">
                skip
              </nuxt-link>
              this step and go straight to your profile
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OnboardingWelcome from '~/components/onboarding/Welcome'
import OnboardingPlayerProfile from '~/components/onboarding/PlayerProfile'
export default {
  components: { OnboardingPlayerProfile, OnboardingWelcome },
  data() {
    return {
      page: 2
    }
  },
  async fetch({ store, _ }) {
    await store.dispatch('platforms/fetchPlatforms')
  },
  methods: {
    nextPage() {
      // increment page
      this.page++
      // animate transition
    }
  }
}
</script>
