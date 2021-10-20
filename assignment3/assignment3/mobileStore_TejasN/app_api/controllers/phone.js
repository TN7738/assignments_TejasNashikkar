const mongoose = require('mongoose');
const mobile = mongoose.model('Mobile');

const sendJSONResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
};

const phoneListAll = (req, res) => {
    mobile
        .find()
        .exec((err, mobiledata) => {
            if(err){
                sendJSONResponse(res, 404, err);
                return;
            }
            else if(mobiledata.length <= 0){
                sendJSONResponse(res, 404, {'message' : 'mobile list empty'});
                return;
            }
            else{
                sendJSONResponse(res, 200, mobiledata);
            }
    });
};
const phoneListCreate = (req, res) => {
    mobile
        .create({
            image: req.body.image,
            name: req.body.name,
            storage_options: req.body.storage_options.split(","),
            colors: req.body.colors.split(","),
            price: req.body.price
        }, (err, mobiledata) => {
            if(err){
                sendJSONResponse(res, 400, err);
            }
            else{
                sendJSONResponse(res, 200, mobiledata);
            }
    });
};
const phoneListReadOne = (req, res) => {
    if(req.params && req.params.phoneid){
        mobile
            .findById(req.params.phoneid)
            .exec((err, mobiledata) => {
                if(!mobiledata){
                    sendJSONResponse(res, 404, {'message' : 'phoneid not found'});
                    return;
                }
                else if(err){
                    sendJSONResponse(res, 404, err);
                    return;
                }
                else{
                    sendJSONResponse(res, 200, mobiledata);
                }
        });
    }
    else{
        sendJSONResponse(res, 404, {'message' : 'No phoneid in request'});
    }
};
const phoneListUpdateOne = (req, res) => {
    if(!req.params.phoneid){
        sendJSONResponse(res, 404, {'message': 'phoneid is required'});
        return;
    }
    mobile
        .findById(req.params.phoneid)
        .exec((err, mobiledata) => {
            if(!mobiledata){
                sendJSONResponse(res, 404, {'message': 'no mobiledata found'});
                return;
            }
            else if(err){
                sendJSONResponse(res, 400, err);
                return
            }
            mobiledata.image = req.body.image,
            mobiledata.name = req.body.name,
            mobiledata.storage_options = Number(req.body.storage_options.split(",")),
            mobiledata.colors = req.body.colors.split(","),
            mobiledata.price = req.body.price
            mobiledata.save((err, mobiledata) => {
                if(err){
                    sendJSONResponse(res, 400, err);
                }
                else{
                    sendJSONResponse(res, 200, mobiledata);
                }
            });
    });
};
const phoneListDeleteOne = (req, res) => {
    const phoneid = req.params.phoneid;
    if(phoneid){
        food
            .findByIdAndRemove(phoneid)
            .exec((err, mobiledata) => {
                if(err){
                    sendJSONResponse(res, 404, err);
                    return;
                }
                sendJSONResponse(res, 204, null);
            });
    }
    else{
        sendJSONResponse(res, 404, {'message': 'phoneid is required'});
    }
};

module.exports = {
    phoneListAll,
    phoneListCreate,
    phoneListReadOne,
    phoneListUpdateOne,
    phoneListDeleteOne
};