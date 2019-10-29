<template>
  <div class="container">
    <div class="section columns">
      <div class="column is-2">
        <img
          src="https://placehold.it/250x250"
          alt="avatar"
          class="image is-128x128"
        />
      </div>
      <div class="column">
        <h1 class="title">
          {{ community.name }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  asyncData({ $axios, params }) {
    return $axios.get(`/communities/${params.id}`).then((res) => {
      return { community: res.data.data }
    })
  }
}
</script>
