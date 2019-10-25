<!--- components/ValidationErrorHelper.vue -->

<!---
  Validation Error Helper

  Creates helper text to describe validation error on given value

  Usage Example:

  <ValidationErrorHelper :error-bag="errors" field="email" />

  Props:
  - errorBag: Object containing error messages with 'field' as key
  - field: Key of error in errorBag

-->
<template>
  <p v-if="errorBag[field]" class="help has-text-danger">
    {{ errorBag[field][0] }}
  </p>
</template>

<script>
export default {
  props: {
    field: {
      type: String,
      required: true,
      default: 'arrow-down'
    },
    errorBag: {
      type: Object,
      required: true
      // default: []
    }
  }
}
</script>
