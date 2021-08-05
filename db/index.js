const pg = require('pg');
const db = new pg.Client('postgress://localhost/dealers_choice_pg');

db.connect();



module.exports = db;