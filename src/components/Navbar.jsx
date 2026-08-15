import { Link } from "react-router-dom";

// Add a navigation Link below. A <Link> works like an <a>, but it changes the
// page WITHOUT a full reload.
function Navbar() {
  return (
    <header className="site-nav">
      <span className="site-nav-brand">🥕 Food Rescue Network</span>

      <nav className="site-nav-links" aria-label="Primary">
      
             <Link to="/" className="nave-link">Home</Link>
            
             

      </nav>
    </header>
  );
}

export default Navbar;
