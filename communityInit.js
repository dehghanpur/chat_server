const mongoose = require('mongoose');
const Community = require('./models/community.js');
const User = require('./models/user.js');
const Message = require('./models/message.js');

const text =
    'خب دوستان فرم زیر برای جمع اوری امضا نسبت به این نامه هست.\n' +
    'لطفا در صورت موافقت با موارد درج شده در نامه، نام و نام خانوادگیتون رو در فرم درج کنید تا پیوست به ایمیلی شود که برای دکتر میرروشندل ارسال میشه.\n' +
    'متشکرم.';
require('dotenv').config();

mongoose
    .connect(
        process.env.DB
    )
    .then(async (result) => {
        const user = await new User({
            name: 'محمد دهقانپور'
        });
        await user.save();
        const communityList = ['vue', 'react', 'angular', 'node', 'express', 'nest'];
        let message = {date: '7:52pm', content: text, user: user};

        for (const community of communityList) {
            const temp = await new Community({
                name: community
            });
            temp.save();


            console.log(temp)
        }
        // const com = await Community.find({name:"nest"});
        // message = {...message, community: com[0]._id};
        // console.log(com)
        // for (let i = 0; i < 100; i++) {
        //     const msg = await new Message(message);
        //     await msg.save();
        //     com[0].messages.push(msg);
        //     console.log(555)
        //
        // }
        // com[0].save()
    })
    .catch(err => console.log(err));
