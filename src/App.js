import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=0hwvX60oIkSCUNm1zvuTDZ84DbxIDgbDhqtTLEFz&date=2023-04-13"
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
  }, []);

  return (
    <div className="App">
      {data ? (
        <>
          <h1>{data.title}</h1>
          <img src={data.url} alt={data.title} />
          <p>{data.explanation}</p>
          <p>{data.copyright}</p>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default App;
