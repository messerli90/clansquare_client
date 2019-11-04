<template>
  <div class="field" :class="classes">
    <div class="control has-icons-left">
      <div class="select" :class="size">
        <select v-model="selectedRegion" name="region" @change="handleChange">
          <option value="">
            Select Region
          </option>
          <option v-for="region in regions" :key="region.id" :value="region.id">
            {{ region.name }}
          </option>
        </select>
      </div>
      <div class="icon is-small is-left">
        <Fas i="globe" classes="is-small" />
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
    store: {
      type: String,
      required: true
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
  data() {
    return {
      selectedRegion: ''
    }
  },
  computed: mapGetters({
    regions: 'regions/get_all'
  }),
  methods: {
    handleChange() {
      // Use prop to define which store to send data to
      this.$store.commit(
        `${this.store}/${this.storeMethod}`,
        this.selectedRegion
      )
    }
  }
}
</script>
