var config = module.parent.parent.exports.config;
_ = require('underscore');
var Timestamp = require('mongodb').Timestamp;

module.exports = util = {

	beautify: function(docs) {
		docs = (docs) ? docs : [];
		// TODO: Optimize - Use callback stringify to replace all object to string
		if(_.isArray(docs)) {
			var result=[];
			docs.forEach(function (doc) {
				this.beautifyDoc(doc);
				result.push(doc);
			});
			return result;
		} else {
			return this.beautifyDoc(docs);
		}
	},
	beautifyDoc: function(doc) {
		if(_.isObject(doc)) {
			if(_.isObject(doc._id)) {
				doc._id = doc._id.toHexString();
			} else if(_.isObject(doc.obj) && _.isObject(doc.obj._id)) {
				// Special case for text searches
				doc.obj._id = doc.obj._id.toHexString();
			} else if (_.isObject(doc.fileUpload) && _.isObject(doc.fileUpload.id)) {
				doc.fileUpload.id = doc.fileUpload.id.toHexString();
			} else if (_.isObject(doc.filedata) && _.isObject(doc.filedata.id)) {
				doc.filedata.id = doc.filedata.id.toHexString();
			}
			
			if(_.isObject(doc.uploadDate)) {
				doc.uploadDate = doc.uploadDate.toISOString();
			}
		}
		return doc;
	},
	getTimestamp: function(date) {
		var time;
		date || (date = new Date());
		time = Math.floor(date.getTime() / 1000);
		return new Timestamp(0, time);
	},
	getDate: function(timestamp) {
		return new Date(timestamp.high_ * 1000);
	}

};