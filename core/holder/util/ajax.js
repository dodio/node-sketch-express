exports.error = function(msg,code,data){
	var json = {
		msg:msg
	};
	// 错误json 默认为1
	json.status = (code >> 0 ) || 1;
	if(data){
		json.data = data;
	}
	return json;
}
exports.success = function(data){
	return {
		status:0,
		data:data
	}
};

exports.json = function(code,data,msg){
	return {
		status:code,
		data:data,
		msg:msg
	}
}