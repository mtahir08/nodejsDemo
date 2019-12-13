var bcrypt = require('bcrypt');
const User = require('../models/user');
const saltRounds = 10
var salt = bcrypt.genSaltSync(saltRounds);

const Users = {
    createUser: async (body) => {
        try {
            // encrypt password
            body.password = bcrypt.hashSync(body.password, salt)
            const newUser = new User(body);
            const data = await newUser.save()
            if (data) {
                return data;
            }
            throw data
        } catch (error) {
            throw error

        }

    },
    getById: (id) => {
        const query = User.findById(id);
        query.exec(callback);
        function callback(error, data) {
            if (error) {
                console.log("error", error);
                throw error
            }
            return data
        }
    },
    getByEmail: async (email) => {
        try {
            const query = User.findOne({ email });
            const data = await query.exec();
            if (data) {
                return data
            }
            throw data
        } catch (error) {
            throw error
        }

    },
    compare: (hash, pass) => {
        return bcrypt.compareSync(pass, hash);
    }
}

module.exports = Users