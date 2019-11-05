<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-9-tablet is-8-desktop is-7-widescreen">
            <div class="box onboarding">
              <OnboardingWelcome v-show="type == 'welcome'"></OnboardingWelcome>
              <OnboardingPlayer v-show="type == 'player'"></OnboardingPlayer>
              <OnboardingCommunity v-show="type == 'community'">
              </OnboardingCommunity>
            </div>
            <p class="is-small has-text-centered">
              You can
              <nuxt-link to="/dashboard">
                skip
              </nuxt-link>
              this step and go straight to your dashboard
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OnboardingWelcome from '~/components/onboarding/Welcome'
import OnboardingPlayer from '~/components/onboarding/PlayerProfile'
import OnboardingCommunity from '~/components/onboarding/Community'
export default {
  components: {
    OnboardingPlayer,
    OnboardingWelcome,
    OnboardingCommunity
  },
  computed: {
    type() {
      return this.$store.getters['onboarding/get_type']
    }
  },
  async fetch({ store, _ }) {
    await Promise.all([
      store.dispatch('onboarding/check_user_community'),
      store.dispatch('platforms/fetchPlatforms'),
      store.dispatch('regions/fetchRegions')
    ])
  }
}
</script>

<style lang="scss">
.hero {
  background: #e52d27;
  background: -webkit-linear-gradient(180deg, #b31217, #e52d27);
  background: linear-gradient(180deg, #b31217, #e52d27);
}
.onboarding {
  .title {
    font-size: 2.6rem;
    line-height: 1.25;
  }
  h3.onboarding__title {
    font-size: 1.3rem;
  }

  h6.onbording__subtitle {
    font-weight: 200;
  }

  // .field {
  //   padding: 0.5em 0 0 0;
  //   max-width: 75%;
  // }
  .onboarding__content {
    .title {
      font-size: 2.6rem;
      line-height: 1.25;
    }
    .onboarding__body {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 100%;
      padding: 0 0 3em 0;

      &:last-of-type {
        padding: 0;
      }
    }
  }
}
.onboarding__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
