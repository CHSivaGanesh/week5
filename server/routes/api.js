const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const product = require('../models/product')
const mobiles = require('../models/Mobiles')
const Mobiles = require('../models/Mobiles')

const db = "mongodb+srv://SivaGanesh:sivaganesh@cluster0.ljew3.mongodb.net/Ecommerce?retryWrites=true&w=majority"

router.get('/', (req,res) => {
    res.send('From API route')
})


router.post('/register' , (req , res)=>{
    let userData = req.body
   let user = new User(userData)
   user.save((error , registeredUser) =>{
       if(error)
           console.log("error")
       else{
           res.status(200).send(registeredUser)
       }
   });

});



mongoose.connect(db,  function(err){
    if(err){
        console.error('Error! ' + err)
    } else {
      console.log('Connected to mongodb')      
    }
});


router.get('/register', (req,res) => {
    res.send('registered')
})



router.post('/login' , (req,res) => {
    let userData = req.body;

    User.findOne({email : userData.email} , (error, user) =>{
        if(error){
            console.log(error)
        }else{
            if(!user){
                res.status(401).send('Invalid email')
            }else
             if( user.password!= userData.password){
                 res.status(401).send('Invalid Password')
                 }
                 else{
                     res.status(200).send(userData)
                 }
        }
    })
})





















// router.get('/product',(res,req) => {
//  let productdata = req.body;
  
//   var products = [ ]
//   product.find().exec(function(error , product)  
//     {
//       if (error){
//         console.log(error)
//       }
//       else{
//       console.log(product);
//       }
//     });
//   });
  


    //     if(error){
//       console.log("error")
//     }else{
//           console.log(product)
//     }
//     })
  
    

//  });
    

 router.get('/home', (req,res) => {
    let items = [
        {
          "_id": "1",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "2",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "3",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "4",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "5",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        },
        {
          "_id": "6",
          "name": "Auto Expo",
          "description": "lorem ipsum",
          "date": "2012-04-23T18:25:43.511Z"
        }
      ]
      res.json(items)
    });

module.exports =router 
