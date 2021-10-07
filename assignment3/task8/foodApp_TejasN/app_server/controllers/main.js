const index = function(req, res){
    res.render('index', { title: 'Dr.Pizza' });
};

module.exports = {
    index
};