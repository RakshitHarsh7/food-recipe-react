  import { useState } from "react";
  import reactLogo from "./assets/react.svg";
  import viteLogo from "/vite.svg";
  import "./App.css";
  import { Routes, Route } from "react-router-dom";
  import NavBar from "./components/navbar";
  import Home from "./pages/home";
  import Favorites from "./pages/favourites";
  import Details from "./pages/details";

  function App() {
    return (
      <div>
        <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favorites />} />
            <Route path="/receipe-item/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    );
  }

  export default App;
