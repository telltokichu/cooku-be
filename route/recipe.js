const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('../middlewares/models/recipe.model');
const messages = require('../util/message');
const router = new express();

router.post('/', async (req, res) => {
	try {
		await new Recipe(req.body).save();
		res.status(200).json({
			message: messages.recipeSuccessMessage.RecipeAddedSuccessfully
		});
	} catch (err) {
		console.log('err: ', err);
	}
});

module.exports = router;
