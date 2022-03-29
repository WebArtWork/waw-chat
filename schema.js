var mongoose = require('mongoose');
var Schema = mongoose.Schema({
	chat: String,
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	text: String
});

module.exports = mongoose.model('Chat', Schema);