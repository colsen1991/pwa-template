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
      'required': true,
      'message': 'Website name (visible to the user)'
    },
    site_short_name: {
      'type': 'string',
      'required': true,
      'message': 'Website short name (visible to the user)'
    },
    description: {
      'type': 'string',
      'required': true,
      'message': 'Project description',
    },
    site_description: {
      'type': 'string',
      'required': true,
      'message': 'Website description (visible to the user)',
    },
    author: {
      'type': 'string',
      'required': true,
      'message': 'Author NAME <EMAIL> (HOMEPAGE)'
    },
    author_homepage: {
      'type': 'string',
      'message': 'Author homepage or profile url',
      'default': 'https://about.me'
    },
    site_domain: {
      'type': 'string',
      'message': 'Site domain (https://www.*.* etc)',
      'default': 'https://www.example.com'
    },
    locale: {
      'type': 'string',
      'message': 'Locale',
      'default': 'no_NO'
    },

  },
  completeMessage: '{{#inPlace}}To get started:\n\n  npm install # Or yarn\n  npm run dev{{else}}To get started:\n\n  cd {{destDirName}}\n  npm install # Or yarn\n  npm run dev{{/inPlace}}'
};
