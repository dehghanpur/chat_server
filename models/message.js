const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Message = new Schema({
    author: {
        type: String,
        require: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String,
        require: true
    }
}, {timestamps: true});
module.exports = mongoose.model('Message', Message);
