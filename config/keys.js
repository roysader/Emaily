// keys.js - figure out what set of credentials to return 

if (process.env.NODE_ENV === 'production') {

    module.exports = require('./prod');
    //we are in production - reutrn the prod set of keys

} else {
    //we are in development - return the dev keys!!
    module.exports = require('./dev');
}