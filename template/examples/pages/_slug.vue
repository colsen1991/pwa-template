<template>
  <article class="section padding-top-1-5rem">
    <div class="container">
      <header class="has-text-centered">
        <h2 class="title is-2">{{tittel}}</h2>
        <hr>
      </header>
      <figure class="image">
        <img v-lazy="bilde.url" :alt="bilde.alt" :title="bilde.title">
      </figure>

      <div class="content margin-top-1rem">
        <div v-html="sammendrag" class="has-text-weight-bold"></div>

        <br>

        <div v-html="innhold"></div>

        <br>

        <time :datetime="dato">
          Publisert {{new Date(dato).toLocaleDateString('nb-NO', { year: 'numeric', month: 'long', day: 'numeric' })}}
        </time>
      </div>
      <div class="has-text-centered">
        <nuxt-link to="/nyheter" class="has-text-info">< Tilbake</nuxt-link>
      </div>
    </div>
  </article>
</template>

<script>
  import 'whatwg-fetch'
  import generelt from '../../static/data/nyheter.json'

  export default {
    async asyncData ({ payload, params: { nyhet }, error }) {
    if (payload) {
      return {
        ...payload,
        url: generelt.url
    }
    }

    if (process.client) {
      try {
        const response = await fetch(`/data/nyheter/${nyhet}.json`)
        return await response.json()
      } catch (e) {
        error({
          statusCode: 500,
          title: 'Wooops!',
          message: 'Det skjedde en feil på siden. Beklager dette...'
        })
      }
    }

    if (process.server) {
      return require(`../../static/data/nyheter/${nyhet}.json`)
    }
  },
  head () {
    return {
      title: `${this.tittel} - Nyheter`,
      link: [ { hid: 'canonical', rel: 'canonical', href: `${this.url}/nyheter/${this.slug}` } ],
      meta: [
        { hid: 'description', name: 'description', content: this.seo.description },
        { hid: 'og:title', property: 'og:title', content: this.seo.title },
        { hid: 'og:description', property: 'og:description', content: this.seo.description },
        { hid: 'og:image', property: 'og:image', content: this.seo.image },
        { hid: 'og:type', property: 'og:type', content: 'article' }
      ]
    }
  }
  }
</script>
