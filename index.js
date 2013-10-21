exports = module.exports;
try {
	exports.accessControl = require('./access/accessControl');
} catch (err) {
	console.warn('WARN: Library vcommons:accessControl Library is not loaded. ' + err);
}

try {
	exports.log = require('./log/logger');
} catch (err) {
	console.warn('WARN: Library vcommons:logger Library is not loaded. ' + err);
}
try {
	exports.util = require('./util/util');
} catch (err) {
	console.warn('WARN: Library vcommons:util Library is not loaded. ' + err);
}
try {
	exports.objTree = require('./xml/js-ObjTree');
} catch (err) {
	console.warn('WARN: Library vcommons:ObjTree is not loaded. ' + err);
}
try {
	exports.bodyParser = require('./express/bodyParser');
} catch (err) {
	console.warn('WARN: Library vcommons:bodyParser is not loaded. ' + err);
}
try {
	exports.multipartBodyParser = require('./express/multipartBodyParser');
} catch (err) {
	console.warn('WARN: Library vcommons:multipartBodyParser  is not loaded. ' + err);
}
try {
	exports.mongoUtil = require('./mongo/util');
} catch (err) {
	console.warn('WARN: Library vcommons:mongoUtil is not loaded. ' + err);
}
