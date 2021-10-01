const foodlist = function(req, res){
    res.render('foodlist', { title: 'Food list' });
};

const favouriteFood = function(req, res){
    res.render('favourite-food', { title: 'My favourite food' });
};

module.exports = {
    foodlist,
    favouriteFood
};