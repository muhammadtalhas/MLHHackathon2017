var dbconfig = require('../dbconfig.js');
var ObjectId = require('mongodb').ObjectId;
var crypto   = require('crypto');

function generateTTL() {
    let today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds() + 3);
}

module.exports = {
    insertUser : function (db, userData, CB) {
        //Check for dups here TODO

        let logic = function (db, callback){
            let token = Math.random().toString(36).substring(3);
            let salt = crypto.randomBytes(16).toString('hex');

            db.collection('users').insert(
                {
                    username:userData.username,
                    email:userData.email,
                    hash: crypto.pbkdf2Sync(userData.pwd, salt, 1000, 64, 'sha512').toString('hex'),
                    // address:{
                    //   "StreetName":t,
                    //     "City"
                    //     "State"
                    //     "Zip"
                    // },
                    tokens[{
                        "key":token,
                        "TTL":generateTTL()
                    }]
                },
                function (err, result) {
                    callback(err,result)
                }

            )
        }
    }
}