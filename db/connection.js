const mongoose = require('mongoose');
const URI = 'mongodb+srv://kishorelalag:kishorelalag@cluster0-6245x.mongodb.net/test?retryWrites=true&w=majority';
const connectDB = async () => {
	await mongoose.connect(URI, { useUnifiedTopology: true });
	console.log('DB Connected !');
};

module.exports = connectDB;
