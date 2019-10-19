const User = require('../models/user');

const Users = {
    createUser: async (body) => {
        try {

            const todo = new User(body);
            const data = await todo.save()
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
            return data
        } catch (error) {
            throw error
        }

    }
}

module.exports = Users