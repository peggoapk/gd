const express = require("express");
const router = express.Router();
const passport = require("passport");

//Blog model
const Blog = require("../../models/Blog");

// Validation
const validateBlogInput = require("../../validation/blog");

// @route GET api/blogs
// @desc Gets all blogs
// @access Public
router.get("/", (req, res) => {
  Blog.find()
    .sort({ dateCreated: -1 })
    .then(blogs => res.json(blogs))
    .catch(err => res.status(404).json({ noblogsfound: "No blogs found" }));
});

// @route GET api/blogs/:id
// @desc Gets singular blog by id
// @access Public
router.get("/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => res.json(blog))
    .catch(err =>
      res.status(404).json({ noblogfound: "No blog found with that ID" })
    );
});

// @route POST api/blogs
// @desc Creates blog
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBlogInput(req.body);

    // check validation
    if (!isValid) {
      // if any errs send 400 with errs object
      return res.status(400).json(errors);
    }
    const newBlog = new Blog({
      title: req.body.title,
      content: req.body.content,
      image: req.body.image,
      user: req.user.id
    });
    newBlog.save().then(blog => res.json(blog));
  }
);

// @route deletes api/blog/:id
// @desc deletes blog
// @access Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Blog.findById(req.params.id)
      .then(blog => {
        // check for blog owner
        if (blog.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: "User not authorized" });
        }
        blog.remove().then(() => res.json({ success: true }));
      })
      .catch(err => res.status(404).json({ postnotfound: "No post found" }));
  }
);

// @route update api/blog/:id
// @desc updates blog
// @access Private
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateBlogInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }
    Blog.findById(req.params.id)
      .then(blog => {
        if (blog.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: "User not authorized" });
        }
        blog.title = req.body.title;
        blog.content = req.body.content;
        blog.save().then(blog => res.json(blog));
      })
      .catch(err => res.status(404).json({ postnotfound: "No posts found" }));
  }
);

module.exports = router;
