const router = require('express').Router()

router.get('/',(req,res,nex)=>{

    // res.send('hellow world')
    res.render('index')

})


module.exports = router