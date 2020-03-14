const CheckAdmin = (req, res, next) => {
    try {
        const authUser = req.authUser;
        if (!authUser || !['A', 'SA'].includes(authUser.role)) {
            throw new Error('You are not authorized for this action!');
        }
        next();
    } catch (error) {
        req.isAuthenticated = false;
        return res.status(401).send({
            message: typeof error === 'string' ? error : 'CheckAdmin failed!'
        });
    }
};

module.exports = CheckAdmin;
