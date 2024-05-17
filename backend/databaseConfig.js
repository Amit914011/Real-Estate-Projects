const mysql=require('mysql')

let connection=mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'Amit@321',
    database:'realState'
})

module.exports = connection