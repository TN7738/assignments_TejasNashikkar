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
    },
    calories: {
        type: String,
        required: true,
        'default': 0
    },
    price: {
        type: String,
        required: true,
        'default': 1
    }
});

mongoose.model('Food', foodSchema);