<template>
  <div>
    <div class="onboarding__form">
      <h3 class="onboarding__title">
        Keyboard &amp; Mouse or Sticks?
      </h3>
      <h6 class="onboarding__subtitle">
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
    <Footer
      prev-step="region"
      next-step="info"
      store-method="onboarding/createOrUpdateCommunity"
    ></Footer>
  </div>
</template>

<script>
import SingleSelect from '~/components/meta/SingleSelect'
import Footer from '~/components/onboarding/Footer'
export default {
  components: { SingleSelect, Footer },
  computed: {
    community() {
      return this.$store.getters['onboarding/get_community']
    }
  }
}
</script>

<style lang="scss" scoped></style>
