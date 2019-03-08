const db = require("../models");

exports.createBlog = async function(req, res, next) {
  try {
    let blog = await db.Blog.create({
      title: req.body.title,
      content: req.body.content,
      user: req.params.id
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.blogs.concat(blog.id);
    await foundUser.save();
    let foundBlog = await db.Blog.findById(blog._id).populate("user", {
      username: true,
      profileImageUrl: true
    });
    return res.status(200).json(foundBlog);
  } catch (err) {
    return next(err);
  }
};
