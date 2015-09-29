module.exports = function() {
	
	return function(req,res,next) {
		res.data.user = {
			uid:123,
			uname:"lala"
		}
		next();
	}
}