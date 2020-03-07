const fs = require('fs');
const path = require('path');
const User = require('./../services/User');

module.exports = {
	CreateUser: async (req, res) => {
		const obj = req.body;
		try {
			const user = await User.getByEmail(obj.email);
			if (user) {
				return res.status(409).send({ message: 'email already exists' });
			}
			const newUser = await User.createUser(obj);
			if (newUser) {
				return res
					.status(200)
					.send({ data: '', message: 'Successfully Created' });
			}
		} catch (error) {
			console.log('error', error);
			res.status(500).send({ error: 'Please try again' });
		}
	},
	GetUsers: async (req, res) => {
		try {
			if (!req.isAuthenticated)
				return res
					.status(401)
					.send({ data: {}, message: 'Authorization failed' });

			let user = await User.getUsers();
			if (user) {
				return res.status(200).send({ data: { user }, message: '' });
			}
			return res.status(404).send({ data: { user }, message: '' });
		} catch (error) {
			console.log('error', error);
			res.status(500).send({ error });
		}
	},
	UpdateUser: async (req, res) => {
		try {
			if (!req.isAuthenticated)
				return res
					.status(401)
					.send({ data: {}, message: 'Authorization failed' });

			let user = await User.getUsers(req.body);
			if (!user) {
				if (req.file)
					fs.unlinkSync(
						path.join(__dirname, '..', 'uploads', req.file.filename)
					);
				return res.status(404).send({ data: {}, message: 'User Not found' });
			}
			const query = { _id: req.body._id };
			var options = { new: true };
			if (req.file && req.file.filename)
				req.body.picture = `images/${req.file.filename}`;
			let item = await User.findOneAndUpdate(query, req.body, options);
			if (item) {
				return res
					.status(200)
					.send({ data: item, message: 'Profile updated Successfully' });
			}
			return res
				.status(409)
				.send({ data: {}, message: 'Profile not updated.' });
		} catch (error) {
			console.log('error', error);
			res.status(500).send({ error });
		}
	}
};
