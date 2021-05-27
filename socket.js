const socketController = require('./controllers/socketController.js');
let io;
module.exports = {
    init: httpServer => {
        io = require('socket.io')(httpServer,{
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
        io.on('connection',async (socket)=>{
            console.log('connected');
            socket.on('disconnect',()=>{
                console.log('disconnect')
            })
            await socketController.allocateRoom(socket);
            await socketController.sendMessage(io,socket);

        })

    }
};
