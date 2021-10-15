const mongoose = require('mongoose');
const food = mongoose.model('Food');

const favouriteFoodReadOne = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};
const favouriteFoodUpdateOne = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};
const favouriteFoodDeleteOne = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};

module.exports = {
    favouriteFoodReadOne,
    favouriteFoodUpdateOne,
    favouriteFoodDeleteOne
};