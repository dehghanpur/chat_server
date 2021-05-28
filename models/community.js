const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Community = new Schema({
    name: {
        unique: true,
        type: String,
        required: true,
    },
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message',
        required: false,
    }],
    onlinePerson: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    }]
});
module.exports = mongoose.model('Community', Community);
