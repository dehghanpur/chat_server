const socketController = require('./controllers/socketController.js');
let io;
module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer, {
            cors: {
                origin: '*',
            }
        });
        return io;
    },
    getIO: () => {
        if (!io) {
            throw new Error('Socket.io not initialized!');
        }
        return io;
    },
    setSocket: () => {
        if (!io) {
            throw new Error('Socket.io not initialized!');
        }
        io.on('connection', async (socket) => {
            socket.on('disconnect', async () => {
                await socketController.sendMessage(io, socket, 'has left the community');
            });
            socket.on('setRoom', async (data) => {
                await socketController.allocateRoom(socket, data);
            });
            socket.on('sendMessage', async (newMessage) => {
                await socketController.sendMessage(io, socket, newMessage);
            });
        });

    }
};
