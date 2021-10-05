const mongoose = require('mongoose');

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
        type: [Number],
        required: true
    },
    colors: {
        type: [String],
        required: true
    },
    price: {
        type: String,
        required: true
    }
});

mongoose.model('Mobile', mobileSchema);