module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'default-src': ["'self'", 'http:', 'https:'],
          'style-src': ["'self'", 'http:', 'https:', 'unsafe-inline'],
          'script-src': ["'self'", 'http:', 'https:', 'unsafe-inline'],
          'img-src': ["'self'", 'data:', 'blob:', 'http:', 'https:'],
          'font-src': ["'self'", 'data:', 'http:', 'https:'],
          'connect-src': ["'self'", 'http:', 'https:'],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
