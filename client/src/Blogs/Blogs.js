import React, { useState, useEffect } from "react";
import { getBlogs } from "../services/blogs.service";
import { connect } from "react-redux";
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

  function handleAddBlog() {
    props.history.push("/blog/add");
  }

  return (
    <>
      <h1 className="text-center">Blog Page</h1>
      {props.isAuthenticated && (
        <>
          <div className="d-none d-md-block">
            <i
              className="fas fa-marker penIcon mr-2 py-4"
              onClick={handleAddBlog}
            />
            Add Blog
          </div>
          <div className="d-xs-block d-md-none">
            <i
              className="fas fa-marker penIcon mr-2 py-4"
              onClick={handleAddBlog}
            />
          </div>
        </>
      )}
      <div className="card-columns">{blogs && <Blog blogs={blogs} />}</div>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
});

export default connect(mapStateToProps)(Blogs);
