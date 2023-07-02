import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'RussDB!10@root',
    database: 'flowerstoredb'
});

db.connect( function (err) {
  if (err) throw err;
  console.log('connected to db');
});
  
export default db;