import React from "react";
import renderHTML from "react-render-html";
function Blog(props) {
  const { blogs } = props;
  return (
    <>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <div className="card" key={blog._id}>
            <div className="card-body">
              <h5 className="card-title blogTitle">{blog.title}</h5>
              <h6 className="text-subtitle text-muted">{blog.dateCreated}</h6>
              <p className="card-text">{renderHTML(blog.content)}</p>
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
