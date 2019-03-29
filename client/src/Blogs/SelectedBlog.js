import React, { useEffect, useState } from "react";
import { getBlogById, deleteBlog } from "../services/blogs.service";
import moment from "moment";
import renderHTML from "react-render-html";
import { NotificationManager } from "react-notifications";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import ShareIcons from "./ShareIcons";

function SelectedBlog(props) {
  const { blogId } = props.match.params;
  const [blog, setBlog] = useState("");

  useEffect(getBlog, []);

  function getBlog() {
    getBlogById(blogId)
      .then(res => {
        setBlog(res.data);
      })
      .catch(err => console.log(err));
  }

  function handleDelete(id) {
    deleteBlog(id).then(() => {
      NotificationManager.success("Blog deleted!");
      props.history.push("/blogs");
    });
  }

  function handleEdit(id) {
    props.history.push("/blogs/createEdit/" + id);
  }

  return (
    <>
      {props.isAuthenticated && props.isAdmin && (
        <div className="d-flex justify-content-between">
          <div className="d-none d-md-block">
            <i
              className="fas fa-trash adminIcon mr-2 py-4"
              onClick={() => handleDelete(blog._id)}
            />
            Delete Blog
          </div>
          <div className="d-xs-block d-md-none">
            <i
              className="fas fa-trash adminIcon mr-2 py-4"
              onClick={() => handleDelete(blog._id)}
            />
          </div>
          <div className="d-none d-md-block">
            <i
              className="fas fa-edit adminIcon mr-2 py-4"
              onClick={() => handleEdit(blog._id)}
            />
            Edit Blog
          </div>
          <div className="d-xs-block d-md-none">
            <i
              className="fas fa-edit adminIcon mr-2 py-4"
              onClick={() => handleEdit(blog._id)}
            />
          </div>
        </div>
      )}
      {blog && (
        <div
          className="py-4"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "50rem"
          }}
        >
          <ShareIcons blogTitle={blog.title} blogImage={blog.image} />
          <h1 className="font-weight-bold">{blog.title}</h1>
          <p className="text-muted">
            {moment(blog.dateCreated).format("MMMM Do YYYY")}
          </p>
          <div>{renderHTML(blog.content)}</div>
          {blog.image && (
            <img
              style={{ maxWidth: "25rem", borderRadius: "25px" }}
              src={blog.image}
              alt=""
            />
          )}
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
  isAdmin: state.isAdmin
});

export default withRouter(connect(mapStateToProps)(SelectedBlog));
