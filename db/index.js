const pg = require('pg');
const client = new pg.Client('postgress://localhost/dealers_choice_pg');

client.connect();

module.exports = client;