import React from "react";

const VideoViewer = (props) => {
  const { data } = props;
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.thumbnail_url} alt={data.title} />
      <a href={data.url} target="_blank">
        Click here to watch the video
      </a>
      <p>{data.explanation}</p>
      <p>{data.copyright}</p>
    </div>
  );
};
export default VideoViewer;
