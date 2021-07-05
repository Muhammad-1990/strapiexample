module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        //ssl: env.bool('DATABASE_SSL', false),
        ssl: false,
        //ssl: { rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false)} // For self-signed certificates }
      },
      options: {},
    },
  },
});
