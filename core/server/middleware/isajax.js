module.exports = function(){

	
	return function(req,res,next) {
		req.isAjax = req.get("X-Requested-With") === "XMLHttpRequest";
		next();
	}
}