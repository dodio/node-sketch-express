
var holder = require("./holder");
global.holder = holder;

holder.server = require("./server");

var monitor = {}

monitor.start = function(callback) {
	var port =  holder.config.get("server").port ;
	holder.server.listen(port,function(err){
		if(!err){
			console.log("server started at port :" + port);
			if(typeof callback === "function"){
				callback();
			}
		}else{
			throw err;
		}
	});
};

function init(options){
	holder.config.set(options);
	return monitor;
}

module.exports = init;