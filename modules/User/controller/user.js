
const User = require('../model/user');

const create = ( req, res ) => {

	try {
		const objUser = {
			name: req.body.name || 'Test User Mongoose',
			email: req.body.email || 'teste@teste.com',
      cpf: req.body.cpf || '999.111.444-77',
			// photo
		}
		// console.log('req ::; ', objUser.email);
		// console.log( 'objUser ::; ', objUser);

		// creates user info in database
    // const user = await User.create(objUser);
    const user = User.create(objUser);
    user.then( (newUser) => {
      // console.log('newUser ::; ', newUser);
      res.status(201).json(newUser);
    })
    .catch( err => res.status(400).json(err))
		// console.log( 'user ::; ', user);


	} catch (error) {
		res.status(400).json(error);
	}
}

const objModulesToExport = {
	create
}

module.exports = objModulesToExport
