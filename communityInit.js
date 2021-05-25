const mongoose = require('mongoose');
const Community = require('./models/community.js');
require('dotenv').config();

mongoose
    .connect(
        process.env.DB
    )
    .then(async (result) => {
        const communityList = ['vue', 'react', 'angular', 'node', 'express', 'nest']
        for (const community of communityList) {
            const temp = await new Community({
                name: community
            });
            temp.save();
            console.log(temp)
        }
    })
    .catch(err => console.log(err));
