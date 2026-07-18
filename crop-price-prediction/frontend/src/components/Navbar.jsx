import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        🌾 CropPredict
      </div>

      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#prediction">Prediction</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;