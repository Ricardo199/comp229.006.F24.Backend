//mongodb+srv://ricardo1529:<db_password>@clustercomp229.fuok2.mongodb.net/?retryWrites=true&w=majority&appName=ClusterCOMP229

const mongoose = require('mongoose');
let conf = require('./conf');

module.exports= function(){
    mongoose.connect(conf.ATLASDB);
    let mongodb= mongoose.connection;
    mongodb.on('error', console.error.bind(console, 'connection error: '));
    mongodb.once('open', function(){
        console.log('Connected to MongoDB...');
    });

    return mongodb;
};