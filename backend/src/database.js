const mongoose = require('mongoose');

const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/thinkshareTest';

mongoose.connect(URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected')
});
