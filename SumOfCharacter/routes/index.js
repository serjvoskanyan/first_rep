
/*
 * GET home page.
 */


exports.calculateSum = function(req, res){
  var firstname = req.body.first;
	var lastname = req.body.last;
	var sum = firstname.length + lastname.length;
  res.send(sum.toString());
};