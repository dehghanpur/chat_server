const User = require('../models/user.js')
exports.setUser = async (req, res, next) => {
    try {
        const name = req.body.name;
        if (!name) {
            const error = new Error('name is required !!')
            error.statusCode = 401;
            throw error
        }
        const user = await new User({
            name: name
        });
        await user.save();
        res.status(201).json({user: user})
    } catch (e) {
        next(e);
    }
}
