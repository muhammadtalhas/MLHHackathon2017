module.exports = {
    getIssues: function (db, CB) {
        var logic = function (db, callback) {
            db.collection("issues").find({}).toArray(function (err, result) {
                if (err){
                    callback({valid:0,error:'something fucked up'},null)
                }else{
                    callback(null,result)
                }
            });
        }

        logic(db, function(err, res){
            if(err){
                CB(err, null)
            }else{
                CB(null, res)
            }
        })
    }

}