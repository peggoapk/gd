import React, { useEffect } from "react";
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
  const url = window.location.href;
  const title = props.blogTitle;

  useEffect(() => console.log(url), []);
  return (
    <div style={{ display: "flex" }} className="py-2">
      <FacebookShareButton className="buttonHover" url={url} quote={title}>
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
