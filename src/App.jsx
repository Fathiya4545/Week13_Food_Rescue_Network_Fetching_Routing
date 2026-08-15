import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getFoodListings } from "./api/foodApi.js";
import Navbar from "./components/Navbar.jsx";
import BoardPage from "./pages/BoardPage.jsx";
import ListingDetailPage from "./pages/ListingDetailPage.jsx";


function App() {
  const [listings, setListings] = useState([]);
  const [status, setStatus] = useState("loading"); // "loading" | "success" | "error"



  useEffect (() =>{
    const loadListings = async () => {
      try {
      const data = await getFoodListings();
      setListings(data);
      setStatus("success");
      }catch (error){
        setStatus("error");
       
        }
      };
      loadListings();
    
  
  }, []);



  return (
    <div className="app">
      <Navbar />

  
     <Routes>
     <Route path="/" element={<BoardPage listings={listings} status={status} />} />
     <Route path="/listings/:listingId" element={<ListingDetailPage listings={listings} status={status}/>} />


     </Routes>




      <footer className="board-footer">
        Food Rescue Network is a classroom prototype for learning React. It isn&apos;t a real
        food-sharing service — all listings are fictional.
      </footer>
    </div>
  );
}

export default App;
