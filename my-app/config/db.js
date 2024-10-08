const mongoose = require('mongoose');
let conf = require('./conf');

module.exports = function() {
    mongoose.connect(conf.ATLASDB.connectionString);

    let mongodb = mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'connection error: '));
    mongodb.once('open', function() {
        console.log('Connected to MongoDB...');
    });

    return mongodb;
};