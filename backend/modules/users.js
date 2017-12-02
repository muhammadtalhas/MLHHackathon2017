// var dbconfig = require('../dbConfig.js');
// var ObjectId = require('mongodb').ObjectId;
var crypto = require('crypto');
var constituentsModule = require('./constituents');

function generateTTL() {
    var today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours(), today.getMinutes(), today.getSeconds() + 3);
}

module.exports = {
    insertUser: function (db, userData, CB) {
        //Check for dups here TODO

        var logic = function (db, constituents, callback) {
            var token = Math.random().toString(36).substring(3);
            var salt = crypto.randomBytes(16).toString('hex');

            db.collection('users').insert(
                {
                    username: userData.username,
                    email: userData.email,
                    salt: salt,
                    hash: crypto.pbkdf2Sync(userData.password, salt, 1000, 64, 'sha512').toString('hex'),
                    address: {
                        "StreetName": userData.street_name,
                        "City": userData.city,
                        "State": userData.state,
                        "Zip": userData.zip
                    },
                    tokens: [{
                        "key": token,
                        "TTL": generateTTL()
                    }],
                    constituents: constituents
                },
                function (err, result) {
                    callback(err, result)
                }
            )
        }

        constituentsModule.getConstituents(userData.zip, function (err, response) {
            if (err) {
                CB({
                    valid:0,
                    error:"Please make sure your address is correct"
                })
            } else {
                logic(db, response, function (err, result) {
                    if (err) {
                        CB(err, null);
                    } else {
                        var resObject = {
                            'valid': 1,
                            '_id': result.ops[0]._id
                        };
                        CB(resObject)
                    }
                })
            }
        })


    },

    login: function (db, data, CB) {
        console.log(data)
        var removeOldTokens = function () {
            db.collection('users').update(
                {
                    // $or: [
                    //     {username: {"$regex": new RegExp(data.username, "i")}},
                    //     {email: {"$regex": new RegExp(data.username, "i")}}
                    // ]
                    username: data.username
                },
                {
                    $pull: {
                        tokens: {
                            ttl: {
                                $lte: new Date()
                            }
                        }
                    }
                }
            );
        };
        var logic = function (db, salt, callback) {
            console.log(salt.salt)
            var generatedToken = Math.random().toString(36).substring(3);
            var hashFinal = crypto.pbkdf2Sync(data.password, salt.salt, 1000, 64, 'sha512').toString('hex');


            db.collection('users').findOneAndUpdate(
                {
                    $or: [
                        {username: {"$regex": new RegExp(data.username, "i")}, hash: hashFinal},
                        {email: {"$regex": new RegExp(data.username, "i")}, hash: hashFinal}
                    ]
                },
                {
                    $push: {
                        'tokens': {
                            $each: [{"key": generatedToken, "ttl": generateTTL()}]
                        }
                    }
                },
                {
                    upsert: false,
                    returnOriginal: false
                },
                function (err, result) {
                    console.log(result);
                    callback(err, result);
                });
        }


        db.collection('users').findOne(
            {
                // $or:
                //     [
                //         {username: {"$regex": new RegExp(data.username, "i")}},
                //         {email: {"$regex": new RegExp(data.username, "i")}}
                //     ]
                username: data.username
            },
            {
                fields: {
                    salt: 1
                }
            }, function (err, salt) {
                if (err) {
                    CB(err, null);
                } else {
                    if (salt) {
                        console.log(salt)
                        logic(db, salt, function (err, response) {
                            if (!response.value) {
                                CB({
                                    valid: 0,
                                    error: "Incorrect Username or Password"
                                }, null);
                                return;
                            }
                            console.log("=======================")
                            console.log(response)
                            console.log("=======================")
                            // Respond
                            var robj = {
                                key: response.value.tokens[0].key,
                                ttl: response.value.tokens[0].ttl,
                                uid: response.value._id,
                                username: response.value.username,
                                email:response.value.email,
                                constituents:response.value.constituents
                            };
                            CB(null, robj);
                        });
                    } else {
                        CB({
                            valid: 0,
                            error: "Incorrect Username or Password"
                        }, null);
                    }
                }
            }
        );
        removeOldTokens()
    }
}
