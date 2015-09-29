module.exports = function() {

	return function(err,req,res,next){
		res.status(500);
		req.isAjax ? res.json(err.message) : res.end(err.message);
	};
}