import React from "react";
import renderHTML from "react-render-html";
import { trimContent } from "./../MiscFunctions";
import moment from "moment";
import { withRouter } from "react-router-dom";
function Blog(props) {
  const { blogs } = props;

  function seeBlog(id) {
    props.history.push("/blogs/" + id);
  }

  return (
    <>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <div className="card blogCard my-4" key={blog._id}>
            <div className="card-body" onClick={() => seeBlog(blog._id)}>
              <h5 className="card-title blogTitle">{blog.title}</h5>
              <h6 className="text-subtitle text-muted">
                {moment(blog.dateCreated).format("MMMM Do YYYY")}
              </h6>
              <p className="card-text">
                {renderHTML(trimContent(blog.content))}
              </p>
              {blog.image && (
                <img src={blog.image} alt="blogImage" className="card-img" />
              )}
            </div>
          </div>
        ))
      ) : (
        <div>There are no blogs...</div>
      )}
    </>
  );
}

export default withRouter(Blog);
