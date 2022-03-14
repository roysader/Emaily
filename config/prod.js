// prod.js - production keys

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: process.env.MONGO_URI,
  //mongoURI: 'mongodb+srv://Stephan:stephan123@emaily-dev.x4goz.mongodb.net/test'
  cookieKey: process.env.COOKIE_KEY
};
//https://data.mongodb-api.com/app/data-aheni/endpoint/data/beta