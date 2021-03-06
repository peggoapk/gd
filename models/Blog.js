const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Blog = mongoose.model("blog", blogSchema);
