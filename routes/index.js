// Get all of our friend data
var data = require('../data.json');

console.log ("this is data"+data);
exports.view = function(req, res){
	//console.log("and friends are" + data.friends);
	res.render('index', {
        "friends": data.friends
    })
};
