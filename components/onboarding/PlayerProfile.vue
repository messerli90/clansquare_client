<template>
  <div class="onboarding__player_profile">
    <h1 class="title has-text-centered">
      Player Profile
    </h1>
    <h2 class="subtitle has-text-centered">
      Customize your profile
    </h2>
    <hr />
    <div class="player_profile_platform">
      <h3>
        Sticks or Keyboard &amp; Mouse?
      </h3>
      <h6>
        Select your preferred platform
      </h6>
      <PlatformSelect
        classes="platform_select"
        store="onboarding"
        store-method="set_platform"
      ></PlatformSelect>
    </div>
    <!-- Region Component -->
  </div>
</template>

<script>
import PlatformSelect from '../meta/PlatformSelect'
export default {
  components: { PlatformSelect }
}
</script>

<style lang="scss" scoped>
.onboarding__player_profile {
  .player_profile_platform {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1em 0;

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
