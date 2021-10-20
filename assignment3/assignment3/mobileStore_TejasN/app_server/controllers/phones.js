const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const renderCreatePage = (req, res) =>{
    res.render('create-new-phone', {
        title: "Create New Phone"
    });
};

const addNewPhone = (req, res) => {
    renderCreatePage(req, res);
};

const editPhone = (req, res) => {
    const path = `/api/phonelist/${req.params.phoneid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body, 'create-new-phone', 'Edit ');
        }
    );
};

const doAddNewPhone = (req, res) => {
    const path = `/api/phonelist`;
    const postdata = {
        image: req.body.image,
        name: req.body.name,
        storage_options: req.body.storage_options,
        colors: req.body.colors,
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
                res.redirect('/list-display');
            }
            else{
                console.log("status code: ", response.statusCode);
                console.log("body: ", body);
            }
        }
    );
};

const doEditPhone = (req, res) => {
    const path = `/api/phonelist/${req.params.phoneid}`;
    const putdata = {
        image: req.body.image,
        name: req.body.name,
        storage_options: req.body.storage_options.split(","),
        colors: req.body.colors.split(","),
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
                res.redirect(`/phone-info/${req.params.phoneid}`);
            }
        }
    );
};

const _renderPhoneListpage = (req, res, responseBody, pageToRender, pageTitle) => {
    let message = null;
    if(!(responseBody instanceof Array)) {
        message = "API looup error.";
        responseBody = [];
    } 
    else {
        if(!responseBody.length) {
            message = "No phone found.";
        }
    }
  
    res.render(pageToRender, {
        phones: responseBody,
        message: message,
        title: pageTitle
    });
};

const _renderDetailPage = (req, res, responseBody, pageToRender, pageTitle) => {
    res.render(pageToRender, {
        currentPhone: responseBody,
        title: pageTitle + responseBody.name
    });
};

const phonelist = (req, res) => {
    const path = '/api/phonelist';
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderPhoneListpage(req, res, body, 'list-display', 'The Phone Zone');
        }
    )
};

const phoneInfo = (req, res) => {
    const path = `/api/phonelist/${req.params.phoneid}`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions,
        (err, response, body) => {
            _renderDetailPage(req, res, body, 'phone-info', 'Phone Details');
        }
    )
};

module.exports = {
    phonelist,
    phoneInfo,
    doAddNewPhone,
    addNewPhone
}