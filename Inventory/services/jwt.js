const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const JWT = {
    createToken: user => {
        return 'thisisthetokenof:' + user.id;
    },
    verify: token => {
        try {
            return jwt.verify(token, secret);
        } catch (e) {
            throw new Error('jwt token not verified');
        }
    },

    generateToken: user => {
        return jwt.sign(
            {
                sub: user.id,
                exp: Math.floor(Date.now() / 1000) + 60 * 60
            },
            secret
        );
    }

}
module.exports = JWT