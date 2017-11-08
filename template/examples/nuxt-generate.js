const config = {
  generate: {
    async routes () {
      return [
        {
          route: '/blog',
          payload: blogPosts
        },
        ...blogPosts.map(({ slug }) => {
          return {
            route: `/blog/${slug}`,
            payload: require(`./static/data/${slug}.json`)
          }
        })
      ]
    }
  },
}
