module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST', 'cluster0.wca0k.mongodb.net'),
        srv: env.bool('DATABASE_SRV', true),
        port: env.int('DATABASE_PORT', 27017),
        database: env('DATABASE_NAME', 'cirminal'),
        username: env('DATABASE_USERNAME', 'RamziOsman'),
        password: env('DATABASE_PASSWORD', '123456789Ra'),
      },
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', 'admin'),
        ssl: env.bool('DATABASE_SSL', true),
      },
    },
  },
});
