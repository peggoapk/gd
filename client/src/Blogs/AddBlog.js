import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createBlog } from "../services/blogs.service";

function AddBlog(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  function handleContent(e) {
    setContent(e);
  }

  function handleSubmit() {
    const blog = { title, content };
    createBlog(blog).then(res => {
      console.log(res);
    });
  }

  return (
    <>
      <div className="form-group">
        <h1 className="display-5">Blog Title</h1>
        <input
          className="form-control"
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
      <button className="btn btn-outline-primary" onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default AddBlog;
