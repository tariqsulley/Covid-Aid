const router = require("express").Router();
const Users = require('../Models/User.model')

router.route("/").get((req, res)=> {
    
})


router.route("/").post((req , res)=> {
    let body = req.body;
    // let User = new Users({

    // })

    console.log(body);
    
})

module.exports = router;

