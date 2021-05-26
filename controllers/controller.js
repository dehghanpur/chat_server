const Community = require('../models/community.js');
const User = require('../models/user.js');
const Message = require('../models/message.js')
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
};

exports.getMessage = async (req, res, next) => {
    try {
        const page = req.query.page;
        const communityName = req.query.community;
        if (!page || !communityName) {
            const error = new Error('invalid query');
            error.statusCode = 401;
            throw error;
        }

        const community = await Community.findOne({name: communityName});
        const messages = await Message.find({
            community: community,
        }, {}, {sort: {'createdAt': -1}}).populate('user').skip(page * 10).limit(10);
        res.status(200).json({message: messages})
    } catch (e) {
        console.log(e)
        next(e)
    }
}
