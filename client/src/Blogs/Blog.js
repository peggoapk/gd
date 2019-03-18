import React from "react";
import renderHTML from "react-render-html";
import { trimContent } from "./../MiscFunctions";
import moment from "moment";
function Blog(props) {
  const { blogs } = props;
  return (
    <>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <div className="card" key={blog._id}>
            <div className="card-body">
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

export default Blog;
