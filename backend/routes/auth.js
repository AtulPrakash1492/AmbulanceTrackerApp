var express = require("express");
var router = express.Router();
const { check, validationResult} = require("express-validator");
const {alogin} = require("../controllers/auth");


// var sql = process.env.SELECT;

// router.get("/login", (req, res) => {
// 	console.log(req);  
//   res.render("login");
// })

router.get("/",alogin);

module.exports = router;