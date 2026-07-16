import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-search">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search courses..."
        />
      </div>

      <div className="navbar-right">

        <button className="icon-btn">
          <FaBell />
        </button>

        <div className="profile">
          <FaUserCircle className="profile-icon" />
          <span>Profile</span>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;