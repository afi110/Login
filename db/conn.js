const mongoose = require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB).then(() => {
    console.log(`connection is successfull`);

}).catch((err) => console.log(`not connect`));
