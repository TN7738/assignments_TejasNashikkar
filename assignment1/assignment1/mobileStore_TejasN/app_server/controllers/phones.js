const mobilesArray = [
    {
        image: 'iphone-13.jpg',
        name: 'iPhone 13',
        storage_options: [128, 256, 512],
        colors: ['#faddd7', '#276787', '#232a31', '#faf6f2', '#bf0013'],
        price: '$1099'
    },
    {
        image: 'iphone-13-mini.jpg',
        name: 'iPhone 13 Mini',
        storage_options: [128, 256, 512],
        colors: ['#faddd7', '#276787', '#232a31', '#faf6f2', '#bf0013'],
        price: '$949'
    },
    {
        image: 'iphone-13-pro.jpg',
        name: 'iPhone 13 Pro',
        storage_options: [128, 256, 512, 1],
        colors: ['#a7c1d9', '#f1f2ed', '#fae7cf', '#54524f'],
        price: '$1399'
    },
    {
        image: 'iphone-13-pro-max.jpg',
        name: 'iPhone 13 Pro Max',
        storage_options: [128, 256, 512, 1],
        colors: ['#a7c1d9', '#f1f2ed', '#fae7cf', '#54524f'],
        price: '$1249'
    }
];

const phones = (req, res, next) => {
    res.render('list-display', {
        title: 'The Phone Zone',
        phone_data: mobilesArray
    });
}

module.exports = {
    phones
}