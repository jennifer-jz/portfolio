var express = require('express');
var router = express.Router();
var common = require('../module/common');
var hometitle = "Juanjuan Zhao's Home";

/* GET home page. */
router.get('/', function(req, res, next) {
  $arr.html.title = hometitle;
  $arr.html.tpl = "home";
  common.loadTemplate(req, res, $arr.html);
});

router.get('/home', function(req, res, next) {
  $arr.html.title = hometitle;
  $arr.html.tpl = "home";
  common.loadTemplate(req, res, $arr.html);
});

router.get(['/education', '/education/:subject'], function(req, res, next) {
  $arr.html.title = "Education-" + hometitle;
  $arr.html.tpl = "education";
  $arr.html.subject = req.params.subject; 
  common.loadTemplate(req, res, $arr.html);
});

router.get('/experience', function(req, res, next) {
  $arr.html.title = "Work Experiences-" + hometitle;
  $arr.html.tpl = "experience";
  $arr.html.subject = ""; 
  common.loadTemplate(req, res, $arr.html);
});

router.get(['/product', '/product/:activedemo'], function(req, res, next) {
  $arr.html.title = "Products Developed-" + hometitle;
  $arr.html.tpl = "product";
  $arr.html.subject = ""; 

  var link = common.getVideoURL(req.params.activedemo);
  $arr.html.activedemo = link ? req.params.activedemo : '';
  $arr.html.activelink = link;
  
  var category = common.getCategory(req.params.activedemo);
  $arr.html.category = !link && category ? category : '';

  var tag = common.getTag(req.params.activedemo);
  $arr.html.tag = !link && !category && tag ? tag : '';

  if (req.params.activedemo && !link && !category && !tag) {
    res.redirect('/product');
  }

  common.loadTemplate(req, res, $arr.html);
});

router.get('/capability', function(req, res, next) {
  $arr.html.title = "Capability-" + hometitle;
  $arr.html.tpl = "capability";
  common.loadTemplate(req, res, $arr.html);
});

router.get('/solution', function(req, res, next) {
  $arr.html.title = "Solution-" + hometitle;
  $arr.html.tpl = "solution";
  common.loadTemplate(req, res, $arr.html);
});

router.get('/nlp', function(req, res, next) {
  $arr.html.title = "Natural Language Processing-" + hometitle;
  $arr.html.tpl = "nlp";
  $arr.html.subject = ""; 
  common.loadTemplate(req, res, $arr.html);
});

router.get('/resume', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //common.loadTemplate(req, res, $arr,'capability.tpl');
});

router.get('/aboutme', function(req, res, next) {
  $arr.html.title = "Contact Me-" + hometitle;
  $arr.html.tpl = "aboutme";
  common.loadTemplate(req, res, $arr.html);
});

module.exports = router;
