var path = require("path");

/**
 * 生成指定目录下的模块加载器
 * @param  {[type]} dir [description]
 * @return {[type]}     [description]
 */
module.exports = function(dir) {
	if(!dir){
		throw new Error("缺少目录参数")
	}
	var no_dirhack = /\./g;
	
	return function(mod) {
		if(no_dirhack.test(mod)){
			throw new Error("不允许进行路径跳转");
		}
		try{
			var mod_file = path.join(dir,mod) ;

			return require( mod_file );
		}catch(e){
			holder.logger.error(e);
		}
	}
}