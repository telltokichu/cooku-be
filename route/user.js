const express = require('express');
const mongoose = require('mongoose');
const User = require('../middlewares/models/user.model');
const messages = require('../util/message');
const router = new express();

router.post('/', async (req, res) => {
	try {
		await new User(req.body).save();
		res.status(200).json({
			message: messages.SuccessMessage.UserRegisterSuccessfully
		});
	} catch (err) {
		console.log('err: ', err);
	}
});

module.exports = router;
