exports = module.exports;
try {
	exports.accessControl = require('./access/accessControl');
} catch (err) {
	console.warn('Library vcommons:accessControl Library is not loaded');
}

try {
	exports.log = require('./log/logger');
} catch (err) {
	console.warn('Library vcommons:logger Library is not loaded');
}
try {
	exports.util = require('./util/util');
} catch (err) {
	console.warn('Library vcommons:util Library is not loaded');
}
try {
	exports.objTree = require('./xml/js-objTree');
} catch (err) {
	console.warn('Library vcommons:ObjTree is not loaded');
}
try {
	exports.bodyParser = require('./express/bodyParser');
} catch (err) {
	console.warn('Library vcommons:bodyParser is not loaded');
}
try {
	exports.multipartBodyParser = require('./express/multipartBodyParser');
} catch (err) {
	console.warn('Library vcommons:multipartBodyParser  is not loaded');
}
try {
	exports.mongoUtil = require('./mongo/util');
} catch (err) {
	console.warn('Library vcommons:mongoUtil is not loaded');
}
