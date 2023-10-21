const router = require('express').Router()
const User = require('../models/user.model')

router.get('/login',async(req,res,next)=>{
    res.render('login');
})
router.post('/login',async(req,res,next)=>{
    res.send('login post')
})
router.get('/register',async(req,res,next)=>{
    res.render('register');
})

router.post('/register',async(req,res,next)=>{
    try {
        const {email} = req.body
        const doesExist = await User.findOne({email})
        if(doesExist){
            res.redirect('/auth/register')
            return
        }
        const user = new User(req.body)
        await user.save();
        res.send(req.body);
        
    } catch (error) {
        // console.log(error)
        next(error)
        
    }
    
})
router.post('/logout',async(req,res,next)=>{
    res.send('logout')
})


module.exports = router