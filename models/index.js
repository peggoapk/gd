// adv
const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongod://localhost/mogollon", {
  useNewUrlParser: true,
  keepAlive: true
});
// mongoose.connect("mongod://localhost/mogollon", {
//   keepAlive: true
// });

module.exports.User = require("./User");
module.exports.Blog = require("./Blog");
