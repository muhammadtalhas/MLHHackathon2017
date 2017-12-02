var fetch = require('node-fetch');

module.exports = {
    getConstituents: function (zip, CB){
        var data = []
        fetch(`http://whoismyrepresentative.com/getall_mems.php?zip=${zip}&output=json`).then(
            function (response) {
                return response.json()
            }).then(function (response) {
                console.log(response.results)
                response.results.forEach(function(item){
                    data.push(item);
                });
                CB(null, data)
        })

    }
}