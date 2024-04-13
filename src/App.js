import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ImgViewer from "./components/ImgViewer";
import VideoViewer from "./components/VideoViewer";

function App() {
  const [data, setData] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  const myAPIKey = "0hwvX60oIkSCUNm1zvuTDZ84DbxIDgbDhqtTLEFz";

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${myAPIKey}&date=${date}&thumbs=true`
      )
      .then((response) => {
        //console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.err(error);
      })
      .finally(() => {
        //console.log("axios bitti");
      });
  }, [date]);

  return (
    <div className="App">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      {data ? (
        <>
          {data.media_type === "video" ? (
            <VideoViewer data={data} />
          ) : (
            <ImgViewer data={data} />
          )}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
