var fs = require("fs");
var path = require("path");
var holder = {};

var logger = holder.logger = require("tracer").colorConsole();

holder.util = {};

extend(holder,modules( path.join(__dirname,"mod") ) );
extend(holder.util,modules( path.join(__dirname,"util") ));


function modules(dir){
  var files = fs.readdirSync(dir);
  var mods = {};
  var exp = /\.(js|node|json)$/;
  files.forEach(function(file){
    if(exp.test(file)){
      try{
        var mod = require( path.join(dir,file) );
        mods[filename(file)] = mod;
        logger.log("加载mod："+file);
      }catch(e){
        logger.error(e.message);
        return;
      }
    }else{
      logger.warning("忽略非node模块文件：" + file );
    }
  });

  return mods;
}

function filename(file){
  return file.split(".")[0];
}

function extend(namespace,obj){

  Object.keys(obj).forEach(function(k){

    if(namespace.hasOwnProperty(k)){
      logger.warning("%s中属性%s被覆盖.",namespace.toString(), k);
    }
    namespace[k] = obj[k];
  });
}

module.exports = holder;