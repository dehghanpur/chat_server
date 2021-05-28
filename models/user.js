const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = new Schema({
    name: {
        type: String,
        required: true,
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message',
        required: false,
    }]
});
module.exports = mongoose.model('User', User);
