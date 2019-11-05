<template>
  <div class="onboarding__community">
    <h1 class="title has-text-centered">
      A Brand New Community
    </h1>
    <h2 class="subtitle has-text-centered">
      Let's create your community
    </h2>
    <hr />
    <Info v-show="step == 'info'"></Info>
    <Region v-show="step == 'region'"></Region>
    <Platform v-show="step == 'platform'"></Platform>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Info from '~/components/onboarding/community/Info'
import Region from '~/components/onboarding/community/Region'
import Platform from '~/components/onboarding/community/Platform'
export default {
  components: { Info, Region, Platform },
  computed: mapGetters({
    step: 'onboarding/get_step',
    loading: 'onboarding/get_loading'
  })
}
</script>

<style lang="scss">
.onboarding__form {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
