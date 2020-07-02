const knex = require('knex');

const knexfile = require('../knexfile.js'); //config

const env = process.env.NODE_ENV || 'development';
const configOptions = knexfile[env];

module.exports = knex(configOptions);

// const knex = require("knex");

// const config = require("../knexfile.js");

// const environment = process.env.DB_ENV || "development";

// module.exports = knex(config[environment]);
