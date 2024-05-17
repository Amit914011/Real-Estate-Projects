const express = require('express')
const cors = require('cors')
const db=require('./databaseConfig')
const route=require('./route/feedBackFormRoute')
let app=express()
app.use(express.json())
app.use(cors())


db.connect((err)=>{
    if(err) throw err
    else{
        console.log('Databade Connected..')
    }
})
let createTable=`
create table if not exists feedBack(
    id int not null auto_increment,
    name varchar(255) null,
    email varchar(255) null,
    number varchar(255) null,
    subject varchar(255) null,
    message varchar(255) null,
    primary key(id)
)`

db.query(createTable,(err,reselt)=>{
    if(err) throw err
    else{
        console.log('Table Created Successful..')
    }
})
app.use('/api',route)

app.listen(3000,()=>{
    console.log('Server is Runing on 3000 Port..')
})