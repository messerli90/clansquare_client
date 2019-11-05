<template>
  <div class="field" :class="classes">
    <div class="control has-icons-left">
      <div class="select" :class="size">
        <select v-model="selectedValue" @change="handleChange">
          <option value="">
            {{ placeholder }}
          </option>
          <option v-for="item in data" :key="item.id" :value="item.id">
            {{ item.name }}
          </option>
        </select>
      </div>
      <div v-if="icon" class="icon is-small is-left">
        <Fas :i="icon" classes="is-small" />
      </div>
    </div>
  </div>
</template>

<script>
import Fas from '~/components/fonts/Fas'
export default {
  components: { Fas },
  props: {
    name: {
      type: String,
      required: true
    },
    storeMethod: {
      type: String,
      required: true
    },
    getterMethod: {
      type: String,
      required: true
    },
    initial: {
      type: Number,
      required: false,
      default: () => {
        return null
      }
    },
    classes: {
      type: String,
      required: false,
      default: () => {
        return ''
      }
    },
    size: {
      type: String,
      required: false,
      default: () => {
        return ''
      }
    },
    icon: {
      type: String,
      required: false,
      default: () => {
        return null
      }
    }
  },
  data() {
    return {
      selectedValue: this.initial
    }
  },
  computed: {
    placeholder() {
      return 'Select ' + this.name
    },
    data() {
      return this.$store.getters[this.getterMethod]
    }
  },
  methods: {
    handleChange() {
      // Use prop to define which store to send data to
      this.$store.commit(this.storeMethod, this.selectedValue)
    }
  }
}
</script>
