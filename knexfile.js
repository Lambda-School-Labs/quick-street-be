require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    // connection:'postgres://localhost/<examples>',
    migrations: {
      directory: './data/migrations',
    },
    seeds: { 
      directory: './data/seeds' 
    },
    useNullAsDefault: true
  },

  testing: {
    client: 'pg',
    connection: process.env.DB_URL,
    // connection:'postgres://localhost/<examples_test>',
    migrations: {
      directory: './data/migrations',
    },
    seeds: { 
      directory: './data/seeds' 
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: { 
      directory: './data/seeds' 
    },
    useNullAsDefault: true
  },
};
