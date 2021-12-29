const express=require('express')
const router= express.Router()
const User= require('../models/userSchema')


router.get('/',async(req,res)=>{
    try {
        const users= await User.find()
        res.json(users) 
    } catch (error) {
        res.send('Error'+error)
    }
})

router.get('/:id', async(req,res)=>{
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }
    catch(err){
        res.send('Error'+err)
    }
})
router.post('/',async(req,res)=>{
    const user=new users({
        email: req.body.email,
    })
    try{
        const a1=await user.save()
        res.json(a1)
    }
    catch(err){
        res.send('Error'+ err)
    }
})
router.patch('/:id/remove',async(req,res)=>{
    try{
        const user=await User.findById(req.params.id)
        User.email= req.body.email
        const a1=await user.remove()
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
})
module.exports =router
