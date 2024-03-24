import React from "react";
import ReactPlayer from "react-player";

const Wriper = ({ children }) => {
  return <div className=" flex max-h-[300px]  max-w-[300px]">{children}</div>;
};
const Test = () => {
  return (
    <div>
      <div className="max-h-96"></div>
      <ReactPlayer
        url={[
          // "https://player.vimeo.com/progressive_redirect/playback/459389137/rendition/720p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=ed08e400852ff6425c09104f0a3183130435569f53ee8c44a992bf968073edb6",
          "https://player.vimeo.com/progressive_redirect/playback/369069033/rendition/1080p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=4ce44a4f89ad58e262ce3104483fda351ab281e6bb43707d1438f329eb2a685c",
        ]}
        controls
        wrapper={Wriper}
        playing
        height={"100%"}
        style={{
          width: "fit-content",
          background: "blue",
        }}
        width={"fit-content"}
      />
      {/* <video
        id="my-player"
        class="video-js"
        controls
        preload="auto"
        poster="//vjs.zencdn.net/v/oceans.png"
        data-setup="{}"
      >
        <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
        <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
        <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank">
            supports HTML5 video
          </a>
        </p>
      </video> */}
    </div>
  );
};

export default Test;
