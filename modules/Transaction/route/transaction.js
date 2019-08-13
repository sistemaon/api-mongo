
const express = require('express');
const router = express.Router();

const Transaction = require('../controller/transaction')

// router post route transaction register, validating transaction register, transaction create thruout register
router.post('/transact', Transaction.create);
router.get('/transacts', Transaction.findAll);


module.exports = router
