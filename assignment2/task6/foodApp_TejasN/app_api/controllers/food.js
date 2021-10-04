const mongoose = require('mongoose');
const food = mongoose.model('Food');

const foodListAll = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};
const foodListCreate = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};
const foodListReadOne = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};
const foodListUpdateOne = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};
const foodListDeleteOne = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};

module.exports = {
    foodListAll,
    foodListCreate,
    foodListReadOne,
    foodListUpdateOne,
    foodListDeleteOne
};