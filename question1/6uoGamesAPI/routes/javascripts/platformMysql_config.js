
require('dotenv').config();

let config = {
    host: process.env.Platform_host,
    user: process.env.Platform_mysql_id,
    password: process.env.Platform_mysql_pw,
    database: process.env.Platform_database
}

module.exports = config;
