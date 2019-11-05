<template>
  <div>
    <h3 class="onboarding__title">
      Where in the World are you?
    </h3>
    <h6 class="onboarding__subtitle">
      Select your preferred region
    </h6>
    <SingleSelect
      name="Region"
      :initial="community.region_id"
      getter-method="regions/get_all"
      store-method="onboarding/set_community_region"
      size="is-medium"
      icon="globe"
    ></SingleSelect>
    <Footer
      prev-step="info"
      next-step="platform"
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
