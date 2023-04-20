const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "shulemmayer",
    host: "localhost",
    database: "pertodo"
});

module.exports = pool;