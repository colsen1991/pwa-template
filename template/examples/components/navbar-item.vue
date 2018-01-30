<template>
  <nuxt-link :to="path"
             class="navbar-item"
             :class="{'is-active': isActive(currentRoute, path) }">
    <slot/>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'navbar-item',
    methods: {
      isActive (currentRoute, path) {
        if (currentRoute === 0) {
          return
        }

        const indexOfSecondSlash = currentRoute.indexOf('/', 1)

        if (indexOfSecondSlash > -1) {
          return currentRoute.slice(0, indexOfSecondSlash).includes(path)
        } else {
          return currentRoute.includes(path)
        }
      }
    },
    props: {
      path: {
        required: true,
        type: String
      },
      currentRoute: {
        required: true,
        type: [ String, Number ]
      }
    }
  }
</script>
