var fs = require("fs");
// var backbone = require("backbone");
// var Customer = backbone.Model.extend({
// });
var customers = {};
var customer_dir = process.cwd()+"/customer/";

var files = fs.readdirSync(customer_dir);

files.forEach(function(filename) {
	var path = customer_dir+filename;
	var stat  = fs.statSync(path);

	if(stat.isFile() && /\.json$/.test(filename) ){
		var customer = require(path);
		customers[customer["domain"]] = customer;

		customer.localdir = require("path").resolve(customer.localdir);
	}
});

module.exports = {
	get:function(name){
		return customers[name];
	}
}
