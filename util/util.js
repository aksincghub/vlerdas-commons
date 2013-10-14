var config = module.parent.parent.exports.config;
_ = require('underscore');

module.exports = util = {
	
	stripTrailingSlash: function (str) {
		if(str.substr(-1) == '/') {
			return str.substr(0, str.length - 1);
		}
		return str;
	}

};