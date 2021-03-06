var bcrypt = require('bcrypt');
const User = require('../models/user');
const saltRounds = 10;
var salt = bcrypt.genSaltSync(saltRounds);

const Users = {
	createUser: async (obj) => {
		try {
			// encrypt password
			obj.password = bcrypt.hashSync(obj.password, salt);
			const newUser = new User(obj);
			const data = await newUser.save();
			if (data) {
				return data;
			}
			throw data;
		} catch (error) {
			throw error;
		}
	},
	getById: async (id, selected = true) => {
		const query = User.findById(id);
		if (selected)
			return await query
				.select(
					'_id gender email name profile dob role createdAt updatedAt'
				).exec()
		return await query.exec();
	},
	getByEmail: async (email) => {
		try {
			const query = User.findOne({ email });
			return await query.exec();
		} catch (error) {
			throw error;
		}
	},
	getUsers: async (obj) => {
		try {
			// const query = User.find(obj, { _id: 1, email: 1, name: 1 });
			const query = User.find(obj).select(
				'_id gender email name profile dob role createdAt updatedAt'
			);
			return await query.exec();
		} catch (error) {
			throw error;
		}
	},
	compare: (hash, pass) => {
		return bcrypt.compareSync(pass, hash);
	}
};

module.exports = Users;
