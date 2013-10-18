var winston = require('winston');
var log = {
	'logger' : {
		'levels' : {
			'detail' : 0,
			'trace' : 1,
			'debug' : 2,
			'enter' : 3,
			'info' : 4,
			'warn' : 5,
			'error' : 6
		},
		'colors' : {
			'detail' : 'grey',
			'trace' : 'white',
			'debug' : 'blue',
			'enter' : 'inverse',
			'info' : 'green',
			'warn' : 'yellow',
			'error' : 'red'
		},
	}
};

module.exports = util = {
	getLogger : function (category, config) {
		winston.loggers.add(category, config);
		var logger = winston.loggers.get(category);
		logger.setLevels(log.logger.levels);
		winston.addColors(log.logger.colors);
		return logger;
	}
};
