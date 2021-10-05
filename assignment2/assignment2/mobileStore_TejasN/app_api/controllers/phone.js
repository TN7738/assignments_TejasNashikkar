const mongoose = require('mongoose');
const mobile = mongoose.model('Mobile');

const phoneListAll = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};
const phoneListCreate = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};
const phoneListReadOne = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};
const phoneListUpdateOne = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};
const phoneListDeleteOne = (req, res) => {
    res
        .status(200)
        .json({
            'status': 'success'
        });
};

module.exports = {
    phoneListAll,
    phoneListCreate,
    phoneListReadOne,
    phoneListUpdateOne,
    phoneListDeleteOne
};