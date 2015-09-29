module.exports = function(){
	return function(req,res,next){
		res.status(404);
		var ajax = holder.util.ajax;
		req.isAjax ? res.json(ajax.error("not found !")) : res.end("Not Found!");
	}
}