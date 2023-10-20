const router = require('express').Router()

router.get('/login',async(req,res,next)=>{
    res.send('Login')
})
router.get('/register',async(req,res,next)=>{
    res.send('Register')
})
router.post('/login',async(req,res,next)=>{
    res.send('Login post')
})
router.post('/register',async(req,res,next)=>{
    res.send('Register post')
})
router.post('/logout',async(req,res,next)=>{
    res.send('Logout')
})


module.exports = router