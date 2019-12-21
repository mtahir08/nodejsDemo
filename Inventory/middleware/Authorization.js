
const JWT = require('./../services/JWT');
const Authorization = (req, res, next) => {
    try {
        const authHeader = req.get('Authorization')
        if (!authHeader) {
            throw new Error('Authorization failed!')
        }
        const token = authHeader.split(' ').pop()
        if (!token || token === '') {
            throw new Error('Authorization failed!')
        }
        const decoded = JWT.verify(token)
        if (!decoded) {
            throw new Error('Authorization failed!')
        }
        req.isAuthenticated = true;
        next();
    } catch (error) {
        req.isAuthenticated = false;
        return res.status(401).send({ message: typeof error === 'string' ? error : 'Authorization failed!' })
    }
}

module.exports = Authorization