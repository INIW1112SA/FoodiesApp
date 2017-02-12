var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = new mongoose.Schema({
	restaurantId : Number,
	name : String,
	address : String,
	image : String,
	ratings : Number,
	cuisines : String,
	comments : String
})

var Restaurant = mongoose.model('restaurant' , schema);
module.exports = Restaurant;
