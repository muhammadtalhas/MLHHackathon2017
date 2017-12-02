// var dbconfig = require('../dbConfig.js');
// var ObjectId = require('mongodb').ObjectId;
var crypto = require('crypto');

function generateTTL() {
    var today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds() + 3);
}

module.exports = {
    insertUser : function (db, userData, CB) {
        //Check for dups here TODO

            var logic = function (db, callback){
            var token = Math.random().toString(36).substring(3);
            var salt = crypto.randomBytes(16).toString('hex');

            db.collection('users').insert(
                {
                    username: userData.username,
                    email: userData.email,
                    salt:salt,
                    hash: crypto.pbkdf2Sync(userData.password, salt, 1000, 64, 'sha512').toString('hex'),
                    address:{
                        "StreetName": userData.street_name,
                        "City": userData.city,
                        "State": userData.state,
                        "Zip": userData.zip
                    },
                    tokens: [{
                        "key":token,
                        "TTL":generateTTL()
                    }]
                },
                function (err, result) {
                    callback(err,result)
                }

            )
        }

        logic(db, function(err, result){
            if(err){
                CB(err, null);
            }else{
                var resObject = {
                    'valid': 1,
                    '_id': result.ops[0]._id
                };
                CB(resObject)
            }
        })
    }  

}
