module.exports = util = {
	
	stripTrailingSlash: function (str) {
		if(str.substr(-1) == '/') {
			return str.substr(0, str.length - 1);
		}
		return str;
	},
	// found at: 
	// http://stackoverflow.com/questions/3000649/trim-spaces-from-start-and-end-of-string
	trimStr: function (str) {
		str = str.replace(/^\s+/, '');
		for (var i = str.length - 1; i >= 0; i--) {
			if (/\S/.test(str.charAt(i))) {
				str = str.substring(0, i + 1);
				break;
			}
		}
		return str;
	}
};