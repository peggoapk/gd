const express = require("express");
const router = express.Router();

const Blog = require("../../models/Blog");

router.get("/", (req, res) => {
  Blog.find().then(blogs => res.json(blogs));
});

router.post("/", (req, res) => {
  const newBlog = new Blog(req.body);
  newBlog.save().then(blog => res.json(blog));
});

router.delete("/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then(blog => blog.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
