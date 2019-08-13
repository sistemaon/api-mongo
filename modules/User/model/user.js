const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// mongoose user schema mongo
const UserSchema = new Schema({
	name: {type: String},
	email: {type: String},
	cpf: {type: String},
	photo: {type: String}
  // email: {type: String, required: true, unique:true},
	// token: {type: String, required: true}
});

// user index email
// UserSchema.index({email: 1});

// mongoose user model mongo
const User = mongoose.model('User', UserSchema);

module.exports = User;
