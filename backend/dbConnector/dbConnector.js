//PlaceHolder

var mongoUser = require('../modules/users.js')
var mongoIssues = require('../modules/issues.js')

module.exports = {
    user: mongoUser,
    issues: mongoIssues
}