
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.redirect("index.html");
};

exports.register = function(req, res) {

	res.render("home", {user: req.body.username,
						pass: req.body.password,
						age: req.body.age});
};