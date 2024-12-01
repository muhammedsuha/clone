import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    alert("Searching for: " + searchQuery);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="logo">My Clone</h1>
        <p className="description">Welcome to the homepage clone!</p>
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="search-bar"
          />
          <button className="search-button" onClick={handleSearch}>
            Search
          </button>
        </div>
      </header>
      <footer className="footer">
        <p>© 2024 My Clone Website</p>
      </footer>
    </div>
  );
};

export default App;