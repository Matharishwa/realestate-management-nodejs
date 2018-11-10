const router = require('express').Router()



router.get('/',function(req,res){
// var cities = [{
//                 name:'Agra',
//                 img:'http://www.beyondskytour.com/backend/images/ContentPhoto/1DN7MwmS1310201616130410.jpg'
//               },
//               {
//                 name:'Bengaluru',
//                 img:'http://www.kaveribus.com/images/portfolio/img-2.jpg'
//               }
// ]
 res.render('miniproj')

})
router.get('/agra',function(req,res){
    res.render('agra')
    
    })
router.get('/bengaluru',function(req,res){
      res.render('bengaluru')
      
      })
router.get('/chennai',function(req,res){
      res.render('dehli')
      
      })
router.get('/hyderabad',function(req,res){
      res.render('hyderabad')
      
      })
router.get('/kolkata',function(req,res){
      res.render('kolkata')
      
      })
router.get('/mumbai',function(req,res){
      res.render('mumbai')
      
      })
router.get('/vishakapatnam',function(req,res){
      res.render('vishakapatnam')
      
      })
module.exports  = router;

// function myFunc(arg){

// }
// const myFunc= (arg)=>{

// }