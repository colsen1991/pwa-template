<template>
  <nav :class="navbarClass">
    <navbar-item path="/tjenester-og-priser" :currentRoute="$store.state.path">
      Tjenester
    </navbar-item>
    <navbar-item path="/produkter-og-leverandorer" :currentRoute="$store.state.path">
      Produkter
    </navbar-item>
    <navbar-item path="/apningstider" :currentRoute="$store.state.path">
      Åpningstider
    </navbar-item>
    <navbar-item path="/kontakt" :currentRoute="$store.state.path">
      Kontakt
    </navbar-item>
    <navbar-item path="/nyheter" :currentRoute="$store.state.path">
      Nyheter
    </navbar-item>
    <navbar-item path="/om-meg" :currentRoute="$store.state.path">
      Om meg
    </navbar-item>
    <a :href="`tel:+47${telefon}`" class="button is-primary is-outlined">
      Ring meg
    </a>
  </nav>
</template>

<script>
  import generelt from '../static/data/generelt.json'

  export default {
    name: 'navbar',
    data () {
      return {
        route: this.$store.state.path,
        telefon: generelt.telefon
      }
    },
    props: {
      navbarClass: {
        required: true,
        type: String
      }
    }
  }
</script>

<style>
  .cnavbar a.navbar-item.is-active {
    color: #B03800;
  }
</style>
