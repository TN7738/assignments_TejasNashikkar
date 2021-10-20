const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: {
        type: String,
        required: false
    }
});

const mobileSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    storage_options: {
        type: [String],
        required: true
    },
    colors: {
        type: [String],
        required: true
    },
    price: {
        type: String,
        required: true
    },
    reviews: [reviewSchema]
});

mongoose.model('Mobile', mobileSchema);