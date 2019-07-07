const express = require("express")
const router = express.Router()
// const gravatar = require("gravatar")
// const bcrypt = require("bcryptjs")

// load User Model
const User = require("../models/Users")
const confirmBuying = require("../models/confirmBuying")
const UploadImg = require("../models/UploadImage")

router.use("/test",(req,res) => 
    res.json({
    msg : "user works"
})) 


// register user
router.post("/register",(req,res)=>{
 
    // console.log("req.body.email",req.body.email)
    User.findOne({email : req.body.email })
        .then(user => {
            if(user){
                // email = false
                res.send(false)
                console.log("signup failed user exists...")
            }else{
                // email = true
                res.send(true)

                let newUser = new User({
                    firstName : req.body.firstName,
                    lastName : req.body.lastName,
                    phone : req.body.phone,
                    email : req.body.email,
                    password : req.body.password    
                })
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                      if(err) throw err;
                      newUser.password = hash;
                      newUser.save()
                        .then(user => {
                          req.flash('success_msg', 'You are now registered and can log in');
                          res.redirect('/users/login');
                        })
                        .catch(err => {
                          console.log(err);
                          return;
                        });
                    });
                  });

                newUser.save()
                    .then(user => console.log("successfully signup data"))
                    .catch(err => console.log(err))                
            }
        })
})

// User Login
  
router.post("/login",(req,res) => {
    console.log("working login req")
    email  = req.body.email
    password = req.body.password
 
    User.findOne({email : email})
        .then( user => {
            if(!user){
                console.log("email address not found")
                res.send(false)
            }
            if(password == user.password){
                res.send(true)
                console.log("successful Signin")
            }
            else{
                res.send(false)
                console.log("password not found")
                return res.status(404).json({password : "password incorrect"})

            }
        })
})

// COnfirm Buying

router.use("/confirmBuying",(req,res) => {


    let newItem = new confirmBuying ({
        User : req.body.userEmail,
        BuyingList : req.body.buyingList ,
        TotalPrice : req.body.totalPrice
    })
    console.log("newItem",newItem)
    newItem.save()
    .then(res => console.log("successfully inserted"))
    .catch(err => console.log("error in insertion",err))
})

router.post("/upload",(req,res) => {
    UploadImg.find({})
    .then(result => res.send(result))

    // let newImg = new UploadImg ({
    //     fileName : req.body.fileName,
    //     dataURL : req.body.dataURL
    // })
    // newImg.save()
    // .then(res => console.log("image inserted in mongo"))
    // console.log("fileName ", req.body.fileName)
    // fileName = req.body.fileName
})

module.exports = router