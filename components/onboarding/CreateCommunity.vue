<template>
  <div class="onboarding_create_community">
    <h1 class="title has-text-centered">
      A Brand New Community
    </h1>
    <h2 class="subtitle has-text-centered">
      Let's create your community
    </h2>
    <hr />
    <div class="onboarding_create_community__info columns">
      <div class="column is-three-quarters">
        <h3>
          Community Name
        </h3>
        <h6>
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
        <h3>
          Tag
        </h3>
        <h6>
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
    <h3>
      Bio
    </h3>
    <h6>
      Talk about your community
    </h6>
    <textarea
      v-model="body"
      :class="{ 'is-danger': errors.body }"
      rows="7"
      class="textarea is-medium"
    ></textarea>
    <ValidationErrorHelper :error-bag="errors" field="body" />
    <hr />
    <div class="onboarding__footer">
      <a class="is-small" @click.prevent="back">
        Back
      </a>
      <button
        class="button is-primary"
        :class="{ 'is-loading': loading }"
        :disabled="!!loading"
        @click.prevent="saveCommunity"
      >
        Save &amp; Continue
      </button>
    </div>
  </div>
</template>

<script>
import ValidationErrorHelper from '~/components/validation/ValidationErrorHelper'
export default {
  components: { ValidationErrorHelper },
  data() {
    return {
      loading: false
    }
  },
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
  },
  methods: {
    back() {
      this.$store.commit('onboarding/set_step', 'welcome')
    },
    async saveCommunity() {
      this.loading = true
      const saved = await this.$store.dispatch(
        'onboarding/createOrUpdateCommunity'
      )
      if (saved !== false) {
        this.$store.commit('onboarding/set_step', 'welcome')
      }
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.onboarding_create_community {
  .title {
    font-size: 2.6rem;
    line-height: 1.25;
  }
  h3 {
    font-size: 1.3rem;
  }

  h6 {
    font-weight: 200;
  }

  .field {
    padding: 0.5em 0;
  }
}
</style>
