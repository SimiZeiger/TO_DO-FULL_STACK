const Pool = require("pg").Pool;

require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.db_localhost,

});

module.exports = pool;