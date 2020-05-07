const mongoose = require('mongoose');
const user = new mongoose.Schema({
	oauthToken: {
		type: String
	},
	displayName: {
		type: String
	},
	email: {
		type: String
	},
	photoURL: {
		type: String
	}
});
module.exports = User = mongoose.model('user', user);
