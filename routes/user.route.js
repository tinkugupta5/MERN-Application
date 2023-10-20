const router = require('express').Router()

router.get('/profile',(req,res,nex)=>{
    res.send('User Profile')
})


module.exports = router