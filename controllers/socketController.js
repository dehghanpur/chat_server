
exports.allocateRoom = async (socket) => {
    socket.on('setRoom', room => {
        console.log('added to room: ' + room)
        socket.join(room);
    })
};
