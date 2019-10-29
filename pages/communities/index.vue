<template>
  <div class="container">
    <h1 class="title p-lg">
      Communities
    </h1>
    <section>
      <div class="columns is-multiline">
        <div v-if="!communities.length">
          No Communities found.
        </div>
        <div
          v-for="community in communities"
          :key="community.id"
          class="column is-one-third"
        >
          <div class="card is-horizontal has-equal-height">
            <div class="card-image">
              <figure class="image is-square">
                <img
                  src="http://placeimg.com/150/150/any"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">
                    <nuxt-link :to="'/communities/' + community.id">
                      {{ community.name }}
                    </nuxt-link>
                  </p>
                  <p class="subtitle is-6">
                    @johnsmith
                  </p>
                </div>
              </div>
              <div class="content">
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    communities: 'communities/GET_COMMUNITIES'
  }),
  fetch({ store, _ }) {
    return store.dispatch('communities/GET_ALL')
  }
}
</script>
