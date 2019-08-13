
const Transaction = require('../model/transaction');

const create = ( req, res ) => {
	// class: {type: String},
	// photo: {type: String},
	// commodity: {type: String},
	// newOwner: {type: String},
	// transactionId: {type: String},
	// timestamp: {type: String}
	try {
		const objTransaction = {
			class: req.body.class || '$TestTransactionMongoose',
			photo: req.body.photo || 'teste@teste.com',
			paymentId: req.body.paymentId || 'm4c81n310D',
			paymentType: req.body.paymentType || 'Debit',
			amount: req.body.amount || 120.91,
			commodity: req.body.commodity || '999.111.444-77',
			newOwner: req.body.newOwner || 'Jhon Of leahf',
			transactionId: req.body.transactionId || 'aodid231ua321ow877',
			timestamp: req.body.timestamp || '2019-08-05T04:20:00.000Z'
			// photo
		}
		// console.log('req ::; ', objTransaction.photo);
		console.log( 'objTransaction ::; ', objTransaction);

		// creates transaction info in database
    // const transaction = await Transaction.create(objTransaction);
    const transaction = Transaction.create(objTransaction);
    transaction.then( (newTransaction) => {
      // console.log('newTransaction ::; ', newTransaction);
      res.status(201).json(newTransaction);
    })
    .catch( err => res.status(400).json(err))
		// console.log( 'transaction ::; ', transaction);


	} catch (error) {
		res.status(400).json(error);
	}
}

// function to find all transaction
const findAll = ( req, res ) => {
	// finds all transaction info in database
	Transaction.find()
	// finds all transaction
	.then( transaction => {
		// console.log( 'transaction ::; ', transaction);
		res.status(200).json(transaction);
	})
	// error to create transaction
	.catch(err => {
		res.status(400).json(err);
	})
}

const objModulesToExport = {
	create,
	findAll
}

module.exports = objModulesToExport
