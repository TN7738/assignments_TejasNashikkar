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

const renderCreatePage = (req, res) =>{
    res.render('create-new-food', {
        title: "Create New Food"
    });
};

const addNewFood = (req, res) => {
    renderCreatePage(req, res);
};

const editFoodItem = (req, res) => {
    const path = `/api/foodlist/${req.params.foodid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body, 'create-new-food', 'Edit ');
        }
    );
};

const doAddNewFood = (req, res) => {
    const path = `/api/foodlist`;
    const postdata = {
        foodItem: req.body.foodItem,
        description: req.body.description,
        img: req.body.img,
        calories: req.body.calories,
        price: req.body.price
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 200){
                res.redirect('/foodlist');
            }
        }
    );
};

const doEditFoodItem = (req, res) => {
    const path = `/api/foodlist/${req.params.foodid}`;
    const putdata = {
        foodItem: req.body.foodItem,
        description: req.body.description,
        img: req.body.img,
        calories: req.body.calories,
        price: req.body.price
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'PUT',
        json: putdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 200){
                console.log("hit");
                res.redirect(`/food-info/${req.params.foodid}`);
            }
            else{
                console.log("Status code", response.statusCode);
            }
        }
    );
};

const _renderFoodListpage = (req, res, responseBody, pageToRender, pageTitle) => {
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
  
    res.render(pageToRender, {
        foods: responseBody,
        message: message,
        title: pageTitle
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
            _renderFoodListpage(req, res, body, 'foodlist', 'Food List');
        }
    )
};

const _renderDetailPage = (req, res, responseBody, pageToRender, pageTitle) => {
    res.render(pageToRender, {
        currentFood: responseBody,
        title: pageTitle + responseBody.foodItem
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
            _renderDetailPage(req, res, body, 'food-info', 'Food Details');
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
    favouriteFood,
    doAddNewFood,
    addNewFood,
    editFoodItem,
    doEditFoodItem
};