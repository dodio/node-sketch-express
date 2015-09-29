var backbone = require("backbone");
var path = require("path");
var defaultConfig = {
	server:{
		port			: 80,
		customer_dir	: path.resolve("customer/"),
		public_dir 		: path.resolve("public/")
		
	},
	client:{
		public_url		: "/public"
	}
}

var Config = backbone.Model.extend({

});

module.exports = new Config(defaultConfig);