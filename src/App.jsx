import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getFoodListings } from "./api/foodApi.js";
import Navbar from "./components/Navbar.jsx";
import BoardPage from "./pages/BoardPage.jsx";
import ListingDetailPage from "./pages/ListingDetailPage.jsx";

// You work on TWO things in this file — everything else is already built.
//   1. FETCH   — write the useEffect that loads the data from the API.
//   2. ROUTING — add the <Routes> so the board and the detail page show up.
function App() {
  const [listings, setListings] = useState([]);
  const [status, setStatus] = useState("loading"); // "loading" | "success" | "error"

  // ---- 1. FETCH ----------------------------------------------------------
  // Write a useEffect that runs ONCE (empty dependency array []) and calls
  // getFoodListings(). On success: setListings(data) then setStatus("success").
  // On failure: setStatus("error").
  // ↓ your useEffect goes here

  return (
    <div className="app">
      <Navbar />

      {/* ---- 2. ROUTING ----------------------------------------------------
          Add a <Routes> block here, with two <Route>s:
 */}

      <footer className="board-footer">
        Food Rescue Network is a classroom prototype for learning React. It isn&apos;t a real
        food-sharing service — all listings are fictional.
      </footer>
    </div>
  );
}

export default App;
