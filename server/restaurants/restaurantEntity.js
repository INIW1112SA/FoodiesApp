var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = new mongoose.Schema({
	name : String,
	address : String,
	image : String,
	ratings : Number,
	cuisines : String
})

var Restaurant = mongoose.model('restaurant' , schema);
module.exports = Restaurant;
