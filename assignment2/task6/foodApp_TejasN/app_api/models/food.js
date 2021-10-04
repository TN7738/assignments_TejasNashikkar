const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    foodItem: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }
});

mongoose.model('Food', foodSchema, 'foodapp_tejasn');