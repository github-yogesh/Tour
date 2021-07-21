const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : 'localhost',
      user : 'root',
      password : '1234',
      database : 'tour'
    }
  });

if(knex) 
console.log('connected to database') 
else
console.log('cannot connect to database')

module.exports = knex