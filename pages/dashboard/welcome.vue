<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-9-tablet is-8-desktop is-7-widescreen">
            <div class="box">
              <OnboardingWelcome v-show="step == 'welcome'"></OnboardingWelcome>
              <OnboardingPlayerProfile v-show="step == 'playerProfile'">
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
import { mapGetters } from 'vuex'
import OnboardingWelcome from '~/components/onboarding/Welcome'
import OnboardingPlayerProfile from '~/components/onboarding/PlayerProfile'
export default {
  components: { OnboardingPlayerProfile, OnboardingWelcome },
  computed: mapGetters({
    step: 'onboarding/get_step',
    player: 'onboarding/get_player'
  }),
  async fetch({ store, _ }) {
    await store.dispatch('platforms/fetchPlatforms')
    await store.dispatch('regions/fetchRegions')
  }
}
</script>

<style lang="scss" scoped>
.hero {
  background: #e52d27;
  background: -webkit-linear-gradient(180deg, #b31217, #e52d27);
  background: linear-gradient(180deg, #b31217, #e52d27);
}
</style>
