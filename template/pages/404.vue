<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container is-medium content has-text-centered">
        <h1 class="is-size-1 is-size-2-mobile">404 - Siden finnes ikke</h1>
        <p>Ikke helt sikker på hvordan du havnet her...</p>
        <p>Beklager det!</p>
        <nuxt-link to="/" class="button is-link is-large">Tilbake til forsiden</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        title: '404 - Siden finnes ikke | TODO',
        meta: [
          { hid: 'og:title', property: 'og:title', content: '404 - Siden finnes ikke | TODO' },
          { name: 'robots', content: 'noindex, nofollow' }
        ]
      }
    }
  }
</script>
