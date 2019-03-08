const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: "Title cannot be blank!"
  },
  content: {
    type: String,
    required: "Must have some content"
  },
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now
  }
});

module.exports = Blog = mongoose.model("blog", blogSchema);
