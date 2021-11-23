const mysql = require('mysql2')

const pool = mysql.createPool({
  password: '123456',
  user: 'root',
  database: "int101",
  host: 'localhost',
  port: "3306"
});

let studentdb = {};

studentdb.all = () => {
  return new Promise(((resolve, reject) => {
    pool.query('SELECT * FROM users', (err, results) => {
      if(err){
        return reject(err)
      }
      return  resolve(results)
    })
  }))
}

module.exports = studentdb;