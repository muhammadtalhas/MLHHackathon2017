module.exports = {
    mongoClient: require('mongodb').MongoClient,
    // mongoUser: 'admin',
    // mongoPass: 'test1234',
    mongoUrl: `mongodb://admin:test1234@ds129066.mlab.com:29066/mlh2017`,
    mongoObjectID: require('mongodb').ObjectID,
}