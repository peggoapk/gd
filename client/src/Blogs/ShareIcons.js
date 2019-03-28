import React from "react";
import { withRouter } from "react-router";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  PinterestShareButton,
  PinterestIcon
} from "react-share";

function ShareIcons(props) {
  const url = props.location.pathname;
  const title = props.blogTitle;

  return (
    <div style={{ display: "flex" }}>
      <FacebookShareButton
        className="buttonHover"
        url={String(window.location)}
        quote={title}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton
        className="buttonHover"
        url={String(window.location)}
        title={title}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      {props.blogImage && (
        <PinterestShareButton
          className="buttonHover"
          url={String(window.location)}
          media={props.blogImage}
          description={url}
          windowHeight={730}
          windowWidth={1000}
        >
          <PinterestIcon size={32} round />
        </PinterestShareButton>
      )}
    </div>
  );
}

export default withRouter(ShareIcons);
