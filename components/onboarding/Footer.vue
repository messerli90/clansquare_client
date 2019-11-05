<template>
  <div>
    <hr />
    <div class="onboarding__footer">
      <a class="is-small" @click.prevent="back">
        Back
      </a>
      <button
        class="button is-primary"
        :class="{ 'is-loading': loading }"
        :disabled="!!loading"
        @click.prevent="handleNext"
      >
        {{ nextText }}
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prevStep: {
      type: String,
      required: true
    },
    nextStep: {
      type: String,
      required: true
    },
    storeMethod: {
      type: String,
      required: false,
      default() {
        return false
      }
    },
    nextText: {
      type: String,
      required: false,
      default() {
        return 'Next Step'
      }
    }
  },
  computed: {
    loading() {
      return this.$store.getters['onboarding/get_loading']
    }
  },
  methods: {
    back() {
      if (this.prevStep === 'type') {
        this.$store.commit('onboarding/set_type', 'welcome')
      } else {
        this.$store.commit('onboarding/set_step', this.prevStep)
      }
    },
    async handleNext() {
      this.$store.commit('onboarding/set_loading', true)
      if (this.storeMethod !== false) {
        const success = await this.$store.dispatch(this.storeMethod)
        if (success !== false) {
          this.$store.commit('onboarding/set_step', this.nextStep)
        }
      }
      this.$store.commit('onboarding/set_loading', false)
    }
  }
}
</script>
