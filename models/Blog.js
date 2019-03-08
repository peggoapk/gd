const mongoose = require("mongoose");
const User = require("./User");
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
  },
  // added:
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

blogSchema.pre("remove", async function(next) {
  try {
    let user = await User.findById(this.userId);
    user.blog.remove(this.id);
    await user.save();
    return next();
  } catch (err) {
    return next(err);
  }
});

module.exports = Blog = mongoose.model("blog", blogSchema);
