var url = require("url");

function make () {
	return function (req,res,next) {
		
		var hostname = req.hostname;
		var host = hostname.replace(/^.*?\./,"");
		var customer = holder.model("customer");
		var tmp = customer.get(host);

		if(!tmp){
			throw new Error("web site do not exist");
		}
		req.customer = tmp;
		next();
	};
}

module.exports = make;