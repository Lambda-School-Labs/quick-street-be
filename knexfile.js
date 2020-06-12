require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "424242",
      database: "quick_street_be",
    },
    // connection:'postgres://localhost/<examples>',
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    useNullAsDefault: true,
  },

  testing: {
    client: "pg",
    connection: process.env.DB_URL,
    // connection:'postgres://localhost/<examples_test>',
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    useNullAsDefault: true,
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tablename: "knex_migrations",
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    // useNullAsDefault: true
  },
};
