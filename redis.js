const Redis = require("ioredis");
let redis;
module.exports = {
    init: () => {
        redis = new Redis();
    },
    getIO: () => {
        if (!redis) {
            throw new Error('redis not initialized!');
        }
        return redis;
    }
}
