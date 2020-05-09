const mongoose = require('mongoose');
const recipe = new mongoose.Schema({
    recipeTitle: {
        type: String
    },
    ingredients: {
        type: [String]
    },
    steps: [
        {
            stepTitle: {
                type: String
            },
            stepData: {
                type: String
            }
        }
    ]
});
module.exports = Recipe = mongoose.model('recipe', recipe);