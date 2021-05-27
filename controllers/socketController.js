const Community = require('../models/community');
const User = require('../models/user.js');
const Message = require('../models/message');
const moment = require('moment');
exports.allocateRoom = async (socket) => {
    socket.on('setRoom', ({room, userId}) => {
        console.log(userId + ' added to ' + room + ' room');
        socket.room = room;
        socket.userId = userId;
        socket.join(room);
    })
};
exports.sendMessage = async (io,socket) => {
    socket.on('sendMessage', async (newMessage) => {
       const user = await User.findById(socket.userId);
       const community = await Community.findOne({name:socket.room});
       const message = await new Message({
           user:user._id,
           community:community._id,
           content:newMessage,
           date:moment().format('h:m A')
       });
        await message.save();
        user.messages.push(message);
        community.messages.push(message)
        await user.save();
        await community.save();
        message.user = user;
        io.to(socket.room).emit('getMessage',message);

    })
};
