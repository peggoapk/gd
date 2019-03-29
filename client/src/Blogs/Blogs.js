import React, { useState, useEffect, lazy, Suspense } from "react";
import { getBlogs } from "../services/blogs.service";
import { connect } from "react-redux";
const Blog = lazy(() => import("./Blog"));

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
    props.history.push("/blogs/createEdit");
  }

  return (
    <>
      <h1 className="text-center">Blog Page</h1>
      {props.isAuthenticated && props.isAdmin && (
        <>
          <div className="d-none d-md-block">
            <i
              className="fas fa-marker adminIcon mr-2 py-4"
              onClick={handleAddBlog}
            />
            Add Blog
          </div>
          <div className="d-xs-block d-md-none">
            <i
              className="fas fa-marker adminIcon mr-2 py-4"
              onClick={handleAddBlog}
            />
          </div>
        </>
      )}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="card-columns">{blogs && <Blog blogs={blogs} />}</div>
      </Suspense>
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
  currentUser: state.currentUser,
  isAdmin: state.isAdmin
});

export default connect(mapStateToProps)(Blogs);
