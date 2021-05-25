const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Message = new Schema({
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    community:{
        type: Schema.Types.ObjectId,
        ref: 'Community',
        required: true,
    }
}, {timestamps: true});
module.exports = mongoose.model('Message', Message);
