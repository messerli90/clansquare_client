<template>
  <div class="onboarding__player_profile">
    <h1 class="title has-text-centered">
      Player Profile
    </h1>
    <h2 class="subtitle has-text-centered">
      Customize your profile
    </h2>
    <hr />
    <div class="player_profile">
      <h3>
        Keyboard &amp; Mouse or Sticks?
      </h3>
      <h6>
        Select your preferred platform
      </h6>
      <PlatformSelect
        classes="platform_select"
        size="is-medium"
        store="onboarding"
        store-method="set_platform"
      ></PlatformSelect>
    </div>
    <!-- Region Component -->
    <div class="player_profile">
      <h3>
        Where in the World are you?
      </h3>
      <h6>
        Select your preferred region
      </h6>
      <RegionSelect
        classes="platform_select"
        size="is-medium"
        store="onboarding"
        store-method="set_region"
      ></RegionSelect>
    </div>
    <hr />
    <div class="onboarding__footer">
      <a class="is-small" @click.prevent="back">
        Back
      </a>
      <button
        class="button is-primary"
        :class="{ 'is-loading': loading }"
        :disabled="!!loading"
        @click.prevent="nextStep"
      >
        Save &amp; Continue
      </button>
    </div>
  </div>
</template>

<script>
import PlatformSelect from '../meta/PlatformSelect'
import RegionSelect from '../meta/RegionSelect'
export default {
  components: { PlatformSelect, RegionSelect },
  data() {
    return {
      loading: false
    }
  },
  methods: {
    back() {
      this.$store.commit('onboarding/set_step', 'welcome')
    },
    nextStep() {
      this.loading = true
      // const response = await this.$axios
      //   .post('/communities', this.community)
      //   .catch((err) => {
      //     console.error(err)
      //   })
      // if (response && response.status === 201) {
      //   this.$store.commit('onboarding/set_step', 'welcome')
      //   this.$store.commit('onboarding/set_community', this.community)
      // }
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.onboarding__player_profile {
  .title {
    font-size: 2.6rem;
    line-height: 1.25;
  }
  .player_profile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 0 0 3em 0;

    &:last-of-type {
      padding: 0;
    }

    h3 {
      font-size: 1.3rem;
    }

    h6 {
      font-weight: 200;
    }

    .platform_select {
      padding-top: 1em;
    }

    .field {
      max-width: 75%;
    }
  }
}
</style>
