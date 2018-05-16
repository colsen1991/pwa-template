<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container is-medium content has-text-centered">
        <h1 class="is-size-1 is-size-2-mobile">Ukjent feil</h1>
        <p>Ikke helt sikker på hva som skjedde...</p>
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
        title: 'Ukjent feil | TODO',
        meta: [
          { hid: 'og:title', property: 'og:title', content: 'Ukjent feil | TODO' },
          { name: 'robots', content: 'noindex, nofollow' }
        ]
      }
    }
  }
</script>
