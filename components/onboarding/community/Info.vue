<template>
  <div>
    <div class="columns">
      <div class="column is-three-quarters">
        <h3 class="onboarding__title">
          Community Name
        </h3>
        <h6 class="onboarding__subtitle">
          You need a name
        </h6>
        <div class="field">
          <div class="control">
            <input
              v-model.trim="name"
              :class="{ 'is-danger': errors.name }"
              class="input is-medium"
              type="text"
            />
          </div>
          <ValidationErrorHelper :error-bag="errors" field="name" />
        </div>
      </div>
      <div class="column is-one-quarter">
        <h3 class="onboarding__title">
          Tag
        </h3>
        <h6 class="onboarding__subtitle">
          Short name
        </h6>
        <div class="field">
          <div class="control">
            <input
              v-model.trim="short_name"
              :class="{ 'is-danger': errors.short_name }"
              class="input is-medium"
              type="text"
            />
          </div>
          <ValidationErrorHelper :error-bag="errors" field="short_name" />
        </div>
      </div>
    </div>
    <h3 class="onboarding__title">
      Bio
    </h3>
    <h6 class="onboarding__subtitle">
      Talk about your community
    </h6>
    <div class="field">
      <div class="control">
        <textarea
          v-model="body"
          :class="{ 'is-danger': errors.body }"
          rows="7"
          class="textarea is-medium"
        ></textarea>
      </div>
    </div>
    <ValidationErrorHelper :error-bag="errors" field="body" />
    <Footer
      prev-step="type"
      next-step="region"
      store-method="onboarding/createOrUpdateCommunity"
    ></Footer>
  </div>
</template>
<script>
import Footer from '~/components/onboarding/Footer'
import ValidationErrorHelper from '~/components/validation/ValidationErrorHelper'
export default {
  components: { ValidationErrorHelper, Footer },
  computed: {
    name: {
      get() {
        return this.$store.state.onboarding.community.name
      },
      set(value) {
        this.$store.commit('onboarding/set_community_name', value)
      }
    },
    short_name: {
      get() {
        return this.$store.state.onboarding.community.short_name
      },
      set(value) {
        this.$store.commit('onboarding/set_community_short_name', value)
      }
    },
    body: {
      get() {
        return this.$store.state.onboarding.community.body
      },
      set(value) {
        this.$store.commit('onboarding/set_community_body', value)
      }
    }
  }
}
</script>
