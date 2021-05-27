const Redis = require("ioredis");
redis = new Redis(); // uses defaults unless given configuration object
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
