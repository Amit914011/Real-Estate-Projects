const express=require('express')
const router=express.Router()
const controller=require('../controller/feedBackFormController')

router.post('/feedBackSave',controller.feedBackSave)


module.exports=router