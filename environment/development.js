const path = require("path");

module.exports = {
  dbUrl:
    "mongodb+srv://ousmane:TwitterApp@twitter.ebayeuq.mongodb.net/?retryWrites=true&w=majority&appName=twitter",
  cert: path.join(__dirname, "../ssl/local.crt"),
  key: path.join(__dirname, "../ssl/local.key"),
  portHttp: 3000,
  portHttps: 3001,
};
