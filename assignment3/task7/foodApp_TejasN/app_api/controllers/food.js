const mongoose = require('mongoose');
const food = mongoose.model('Food');

const sendJSONResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

const foodListAll = (req, res) => {
    food
        .find()
        .exec((err, fooddata) => {
            if(err){
                sendJSONResponse(res, 404, err);
                return;
            }
            else if(fooddata.length <= 0){
                sendJSONResponse(res, 404, {'message' : 'food list empty'});
                return;
            }
            else{
                sendJSONResponse(res, 200, fooddata);
            }
    });
};
const foodListCreate = (req, res) => {
    food
        .create({
            foodItem: req.body.name,
            description: req.body.desc,
            img: req.body.img
        }, (err, fooddata) => {
            if(err){
                sendJSONResponse(res, 400, err);
            }
            else{
                sendJSONResponse(res, 200, fooddata);
            }
    });
};
const foodListReadOne = (req, res) => {
    if(req.params && req.params.foodid){
        food
            .findById(req.params.foodid)
            .exec((err, fooddata) => {
                if(!fooddata){
                    sendJSONResponse(res, 404, {'message' : 'foodid not found'});
                    return;
                }
                else if(err){
                    sendJSONResponse(res, 404, err);
                    return;
                }
                else{
                    sendJSONResponse(res, 200, fooddata);
                }
        });
    }
    else{
        sendJSONResponse(res, 404, {'message' : 'No foodid in request'});
    }
};
const foodListUpdateOne = (req, res) => {
    if(!req.params.foodid){
        sendJSONResponse(res, 404, {'message': 'foodid is required'});
        return;
    }
    food
        .findById(req.params.foodid)
        .exec((err, fooddata) => {
            if(!fooddata){
                sendJSONResponse(res, 404, {'message': 'no fooddata found'});
                return;
            }
            else if(err){
                sendJSONResponse(res, 400, err);
                return
            }
            fooddata.foodItem = req.body.name;
            fooddata.description = req.body.desc;
            fooddata.img = req.body.img;
            fooddata.save((err, fooddata) => {
                if(err){
                    sendJSONResponse(res, 400, err);
                }
                else{
                    sendJSONResponse(res, 200, fooddata);
                }
            });
    });
};
const foodListDeleteOne = (req, res) => {
    const foodid = req.params.foodid;
    if(foodid){
        food
            .findByIdAndRemove(foodid)
            .exec((err, fooddata) => {
                if(err){
                    sendJSONResponse(res, 404, err);
                    return;
                }
                sendJSONResponse(res, 204, null);
            });
    }
    else{
        sendJSONResponse(res, 404, {'message': 'foodid is required'});
    }
};

module.exports = {
    foodListAll,
    foodListCreate,
    foodListReadOne,
    foodListUpdateOne,
    foodListDeleteOne
};