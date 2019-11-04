<template>
  <div class="container">
    <h1>Dashboard</h1>
    <h3>Welcome {{ user.name }}</h3>
    <nuxt-link to="/dashboard/welcome" class="button is-primary">
      Complete Onboarding
    </nuxt-link>
  </div>
</template>

<script>
export default {
  middleware: 'auth'
}
</script>
