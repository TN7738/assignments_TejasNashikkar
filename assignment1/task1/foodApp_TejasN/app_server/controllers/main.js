const index = function(req, res){
    res.render('index', { title: 'Tejas' });
};

module.exports = {
    index
};