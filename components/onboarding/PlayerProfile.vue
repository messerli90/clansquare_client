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
    <div class="player_profile">
      <button class="button is-large is-primary">
        Next Step
      </button>
    </div>
  </div>
</template>

<script>
import PlatformSelect from '../meta/PlatformSelect'
import RegionSelect from '../meta/RegionSelect'
export default {
  components: { PlatformSelect, RegionSelect }
}
</script>

<style lang="scss" scoped>
.onboarding__player_profile {
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
  }
}
</style>
