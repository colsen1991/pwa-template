module.exports = {
  helpers: {
    raw: function(options) {
      return options.fn(this)
    }
  },
  skipInterpolation: "**/*.vue",
  prompts: {
    name: {
      'type': 'string',
      'required': true,
      'message': 'Project name'
    },
    site_name: {
      'type': 'string',
      'message': 'Visible name',
      'default': 'PWA Plus'
    },
    site_short_name: {
      'type': 'string',
      'message': 'Visible short name',
      'default': 'PWAP'
    },
    description: {
      'type': 'string',
      'message': 'Project description',
      'default': 'PWA Plus project'
    },
    site_description: {
      'type': 'string',
      'message': 'Visible description',
      'default': 'Site w/nuxt and PWA Plus template'
    },
    author: {
      'type': 'string',
      'required': true,
      'message': 'Author'
    },
    author_homepage: {
      'type': 'string',
      'message': 'Author homepage',
      'default': 'https://about.me'
    },
    site_domain: {
      'type': 'string',
      'message': 'Site domain',
      'default': 'https://www.example.com'
    },
    locale: {
      'type': 'string',
      'message': 'Locale',
      'default': 'nb-NO'
    },

  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
