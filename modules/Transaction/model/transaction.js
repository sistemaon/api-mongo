const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// mongoose user schema mongo
const TransactionSchema = new Schema({
	class: {type: String},
	photo: {type: String},
	paymentId: {type: String},
	paymentType: {type: String},
	amount: {type: Number},
	commodity: {type: String},
	newOwner: {type: String},
	transactionId: {type: String},
	timestamp: {type: String}
  // email: {type: String, required: true, unique:true},
	// token: {type: String, required: true}
});

// user index email
// TransactionSchema.index({email: 1});

// mongoose user model mongo
const Transaction = mongoose.model('Transaction', TransactionSchema);

module.exports = Transaction;
