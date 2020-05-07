var express = require('express');
var usrmdl = require('../datamodules/userdata');
var router = express.Router();
var userdata = usrmdl.find({});
router.get('/', function (req , res , next)
{
  userdata.exec(function(err , data){
    if(err) throw err;
    res.render('myweb',{records:data});
  });
});
router.get('/myweb', function (req , res)
{
  userdata.exec(function(err , data){
    if(err) throw err;
    res.render('myweb',{records:data});
  });
});
router.get('/login', function (req , res)
{
    res.render('login',{} )
});
router.get('/signup', function (req , res)
{
    res.render('signup',{})
});
router.get('/lrslt', function (req , res)
{
    res.render('lrslt',{})
});
router.post('/signup', function(req,res,next) {
var userdetails = new usrmdl({
  name: req.body.name,
  email: req.body.email,
  cno: req.body.cno,
  dob: req.body.dob,
  password: req.body.password,
  cpassword: req.body.cpassword,
  random: parseInt(req.body.dob)*parseInt(req.body.cno),
});
userdetails.save(function(err , res1){
  userdata.exec(function(err , data){
    if(err) throw err;
    res.render('myweb',{records:data});
});
});
router.post('/login/', function(req,res,next) {
  console.log(req.body.email);
var fltrEmail = req.body.email;
var fltrPass = req.body.password;

if(fltrEmail != '' && fltrPass != '' ){
  var fltrParam = { $and:[{ email:fltrEmail },{ password:fltrPass }]};
}
else{
  var fltrParam ={};
}
var userfilter = usrmdl.find( fltrParam );
    userfilter.exec(function(err , data){
      if(err) throw err;
      console.log(data);
      res.render('lrslt',{records:data});
  });
});
});

module.exports = router;
