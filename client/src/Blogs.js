import React, { useState, useEffect } from "react";
import { getBlogs } from "./services/blogs.service";
import Blog from "./Blog";

function Blogs(props) {
  const [blogs, setBlogs] = useState("");

  useEffect(getAllBlogs, []);

  function getAllBlogs() {
    getBlogs()
      .then(res => {
        setBlogs(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <h1 className="display-4 text-center">Blog Page</h1>
      <div className="card-columns">{blogs && <Blog blogs={blogs} />}</div>
    </>
  );
}

export default Blogs;
