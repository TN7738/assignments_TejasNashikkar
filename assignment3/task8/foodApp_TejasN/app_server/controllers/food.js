const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const myFavFood = [
    {
        foodItem: "Pizza",
        img: "pizza.png"
    }
];

const _renderHomepage = function(req, res, responseBody) {
    let message = null;
    if(!(responseBody instanceof Array)) {
        message = "API looup error.";
        responseBody = [];
    } 
    else {
        if(!responseBody.length) {
            message = "No food found.";
        }
    }
  
    res.render('foodlist', {
        foods: responseBody,
        message: message
    });
};

const foodlist = (req, res) => {
    const path = '/api/foodlist';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderHomepage(req, res, body);
        }
    )
};

const _renderDetailPage = (req, res, responseBody) => {
    res.render('food-info', {
        currentFood: responseBody
    });
};

const foodInfo = (req, res) => {
    const path = `/api/foodlist/${req.params.foodid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body);
        }
    )
};

const favouriteFood = (req, res) => {
    res.render('favourite-food', 
    { 
        title: 'My favourite food',
        foods: myFavFood
    });
};

module.exports = {
    foodlist,
    foodInfo,
    favouriteFood
};