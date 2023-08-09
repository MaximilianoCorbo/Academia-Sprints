const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Linux66!",
    database: "Sprint",
  },
});
  
module.exports = { knex };