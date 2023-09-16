// api key for omdb 8b0e68fS
import { useEffect } from "react";
import "./App.css";
import SearchIcon from "./searchIcon.svg";

const API_URL = "https://www.omdbapi.com?apikey=8b0e68f";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s={title}`);
    const data = await response.json();

    console.log(data.search);
  };

  useEffect(() => {}, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className="search">
        <input placeholder="Superman" onChange={() => {}} />
      </div>
    </div>
  );
}

export default App;
