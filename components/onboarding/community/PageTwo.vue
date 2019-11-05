<template>
  <div class="onboarding__content">
    <h1 class="title has-text-centered">
      {{ community.name }}
    </h1>
    <h2 class="subtitle has-text-centered">
      Customize your community
    </h2>
    <hr />
    <div class="onboarding__body">
      <h3>
        Keyboard &amp; Mouse or Sticks?
      </h3>
      <h6>
        Select your preferred platform
      </h6>
      <SingleSelect
        name="Platform"
        :initial="community.platform_id"
        getter-method="platforms/get_all"
        store-method="onboarding/set_community_platform"
        size="is-medium"
        icon="gamepad"
      ></SingleSelect>
    </div>
    <!-- Region Component -->
    <OnboardingRegion></OnboardingRegion>
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
import SingleSelect from '~/components/meta/SingleSelect'
import OnboardingRegion from '~/components/onboarding/community/Region'
export default {
  components: { SingleSelect, OnboardingRegion },
  data() {
    return {
      loading: false
    }
  },
  computed: {
    community() {
      return this.$store.getters['onboarding/get_community']
    }
  },
  methods: {
    back() {
      this.$store.commit('onboarding/set_step', 'welcome')
    },
    async nextStep() {
      this.loading = true
      const saved = await this.$store.dispatch(
        'onboarding/createOrUpdateCommunity'
      )
      if (saved !== false) {
        this.$store.commit('onboarding/set_step', 'regionCommunity')
      }
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped></style>
