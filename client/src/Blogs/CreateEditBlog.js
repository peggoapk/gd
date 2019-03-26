import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createBlog, getBlogById, updateBlog } from "../services/blogs.service";
import { NotificationManager } from "react-notifications";

function AddBlog(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { blogId } = props.match.params;

  if (blogId) {
    useEffect(getBlog, []);
  }

  function getBlog() {
    getBlogById(blogId).then(response => {
      setTitle(response.data.title);
      setContent(response.data.content);
    });
  }

  function handleContent(e) {
    setContent(e);
  }

  function handleSubmit() {
    const blog = { blogId, title, content };
    (blogId ? updateBlog(blogId, blog) : createBlog(blog)).then(() => {
      blogId
        ? props.history.push("/blogs/" + blogId)
        : props.history.push("/blogs");
    });
    blogId
      ? NotificationManager.success("Updated blog!")
      : NotificationManager.success("Blog created!").catch(err =>
          console.log(err)
        );
  }

  return (
    <>
      <div className="form-group">
        <h1 className="display-5">Blog Title</h1>
        <input
          className="form-control"
          placeholder="Write your title..."
          name="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </div>
      <ReactQuill
        placeholder="Start your blog..."
        name="content"
        value={content}
        onChange={handleContent}
      />
      <button className="btn btn-outline-primary my-3" onClick={handleSubmit}>
        {blogId ? "Update" : "Submit"}
      </button>
    </>
  );
}

export default AddBlog;
