const db=require('../databaseConfig.js')

exports.feedBackSave=(req,res)=>{
    let name=req.body.name
    let email=req.body.email
    let number=req.body.number
    let subject=req.body.subject
    let message=req.body.message
    let value=[[name,email,number,subject,message]]
    let sql='insert into feedBack(name,email,number,subject,message) values ?'
    db.query(sql,[value],(err,result)=>{
        if(err) throw err
        else{
            res.send('Data Saved')
        }
    })
}

