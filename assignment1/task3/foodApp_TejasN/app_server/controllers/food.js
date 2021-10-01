const foodArray = [
    {
        foodItem: "Tofu Salad",
        description: "It\’s a crispy, crunchy, and colourful mix of appealing foods – and exceptionally healthy to boot!",
        img: "tofu-salad.jpg"
    },
    {
        foodItem: "Lasagna",
        description: "This classic lasagna is made with an easy meat sauce as the base. This is great for feeding a big family.",
        img: "lasagna.jpg"
    },
    {
        foodItem: "Burger",
        description: "This is the ultimate burger that holds together well, and is incredibly delicious with bursting flavours of spices.",
        img: "burger.jpg"
    }
];

const myFavFood = [
    {
        foodItem: "Pizza",
        img: "pizza.png"
    }
];

const foodlist = function(req, res){
    res.render('foodlist', 
    { 
        title: 'Food list',
        foods: foodArray
    });
};

const favouriteFood = function(req, res){
    res.render('favourite-food', 
    { 
        title: 'My favourite food',
        foods: myFavFood
    });
};

module.exports = {
    foodlist,
    favouriteFood
};