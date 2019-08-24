var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.session.user_name){
        res.render("index", {
	    user: req.session.user_name,
        isLoggedIn: req.session.loggedin,
	    user_id: req.session.user_id
    });
    }

else{
    req.session.user_name="";
    req.session.isLoggedIn = false;
    req.session.user_id = "";
    res.render("index", {
	    user: req.session.user_name,
        isLoggedIn: req.session.loggedin,
	    user_id: req.session.user_id
    });
}

});


module.exports = router;
