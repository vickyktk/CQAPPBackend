// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'BookStoreVicky',
      user:     'postgres',
      password: 'stayAwayPostgres'
    },
    migrations: {
      directory:__dirname +'/db/migrations',
    },
    seeds:{
      directory:__dirname + '/db/seeds'
    }
  },
};
