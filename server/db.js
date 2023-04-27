const Pool = require("pg").Pool;

require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.db_host,
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;