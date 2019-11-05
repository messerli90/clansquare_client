<template>
  <div class="field" :class="classes">
    <div class="control has-icons-left">
      <div class="select" :class="size">
        <select
          v-model="selectedPlatform"
          name="platform"
          @change="handleChange"
        >
          <option value="">
            Select Platform
          </option>
          <option
            v-for="platform in platforms"
            :key="platform.id"
            :value="platform.id"
          >
            {{ platform.name }}
          </option>
        </select>
      </div>
      <div class="icon is-small is-left">
        <Fas i="gamepad" classes="is-small" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Fas from '~/components/fonts/Fas'
export default {
  components: { Fas },
  props: {
    classes: {
      type: String,
      required: false,
      default: () => {
        return ''
      }
    },
    initial: {
      type: Number,
      required: false,
      default: () => {
        return null
      }
    },
    storeMethod: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: () => {
        return ''
      }
    }
  },
  computed: {
    selectedPlatform() {
      return this.initial ? this.initial : ''
    },
    ...mapGetters({
      platforms: 'platforms/get_all'
    })
  },
  methods: {
    handleChange() {
      // Use prop to define which store to send data to
      this.$store.commit(this.storeMethod, this.selectedPlatform)
    }
  }
}
</script>
