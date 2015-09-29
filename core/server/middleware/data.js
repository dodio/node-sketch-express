module.exports = function() {
	return function(req,res,next){
		res.data = res.data || {};
		next();
	}
}