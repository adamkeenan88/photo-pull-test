import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [photos, setPhotos] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleClick() {
    setShowMore(!showMore);
  }
  return (
    <div className="App">
      <>
        {photos
          ? photos.map(
              (photo, index) =>
                index > 0 &&
                index <= 10 && (
                  <div className="photoInfo" key={index}>
                    <img src={photo.thumbnailUrl} alt="thumbnail" />
                    <p>{photo.title}</p>
                  </div>
                )
            )
          : "Waiting on Photos"}
        <button onClick={handleClick}>Load More</button>
        <div>
          {showMore === true
            ? photos.map(
                (photo, index) =>
                  index > 10 &&
                  index <= 20 && (
                    <div className="photoInfo" key={index}>
                      <img src={photo.thumbnailUrl} alt="thumbnail" />
                      <p>{photo.title}</p>
                    </div>
                  )
              )
            : null}
        </div>
      </>
    </div>
  );
}

export default App;
