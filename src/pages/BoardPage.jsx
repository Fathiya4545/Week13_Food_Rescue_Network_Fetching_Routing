import FoodListingList from "../components/FoodListingList.jsx";

// Three simple states: loading, error, or the list of listings.
function BoardPage({ listings, status }) {
  return (
    <div className="board">
      <header className="board-header">
        <p className="board-eyebrow">Community Board</p>
        <h1 className="board-title">Food Rescue Network</h1>
        <p className="board-subtitle">Surplus food from local providers. Click a listing to see its details.</p>
      </header>

      {status === "loading" && <p className="board-state">Loading listings…</p>}
      {status === "error" && <p className="board-state">Sorry — we couldn't load the listings.</p>}
      {status === "success" && <FoodListingList listings={listings} />}
    </div>
  );
}

export default BoardPage;
