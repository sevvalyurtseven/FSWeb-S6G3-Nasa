import React from "react";

const ImgViewer = (props) => {
  const { data } = props;
  return (
    <div>
      <h1>{data.title}</h1>
      <img src={data.url} alt={data.title} />
      <p>{data.explanation}</p>
      <p>{data.copyright}</p>
    </div>
  );
};
export default ImgViewer;
