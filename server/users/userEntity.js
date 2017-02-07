const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');

const schema = new mongoose.Schema({
	userName: String,
	password:String
});

// generating a hash
schema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
schema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};


const model = mongoose.model('User', schema);
module.exports = {
	userModel: model
};
