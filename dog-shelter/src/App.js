import logo from "./logo.svg";
import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DogCard from "./DogCard";

function App() {
  // need to fetch the dog information from the API
  const testJSON = {
    id: "1",
    img: "https://via.assets.so/img.jpg?w=400&h=150&tc=blue&bg=#cecece",
    name: "Buddy",
    age: 3,
    zip_code: "12345",
    breed: "Golden Retriever",
  };

  return (
    <div className="App">
      <h1>Testing</h1>
      <DogCard dog={testJSON} />
    </div>
  );
}

export default App;
