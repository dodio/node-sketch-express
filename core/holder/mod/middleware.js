var path = require("path");

var load = require("./loader")(path.resolve("core/server"));
/**
 * 加载中间件
 * @param  {[type]} middleware    [中间件路径]
 * @param  {[type]} ... [middleware 之后的参数均将发给具体的中间件生成器]
 * @return {[type]}         [中间件]
 */
function middleware(ware) {
	return load(ware).apply( null , Array.prototype.slice.call(arguments,1) );
}

middleware.wares = function(){
	return Array.prototype.slice.call(arguments,0).map(function(w){
		return middleware(w);
	});
}

module.exports = middleware;