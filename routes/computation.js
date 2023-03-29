var express = require('express');
var router = express.Router();

/* GET home page. Anirudh Gunde(S560220)*/
router.get('/', function(req, res, next) {
if(Object.keys(req.query).length == 0){
  var x = Math.random();
  res.render('computation',{val1:`Math.fround() applied to ${x} is ${Math.fround(x)}`,
val2:`Math.random() applied to ${x} is ${Math.random(x)}`,
val3:`Math.round() applied to ${x} is ${Math.round(x)}`
});
}

else{
  for(let i in req.query){
    res.render('computation',{val1:`Math.fround() applied to ${req.query[i]} is  ${Math.fround(req.query[i])}`,
val2:`Math.random() applied to ${req.query[i]} is ${Math.random(req.query[i])}`,
val3:`Math.round() applied to ${req.query[i]} is ${Math.round(req.query[i])}`})
  }

}
 
});

module.exports = router;