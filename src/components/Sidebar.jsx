import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaPlusCircle,
  FaChartLine,
  FaUser,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <div className="logo">
        <h2>Course Tracker</h2>
      </div>

      <ul className="menu">

        <li>
          <NavLink to="/dashboard" className="menu-link">
            <FaHome className="icon" />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/courses" className="menu-link">
            <FaBook className="icon" />
            <span>Courses</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/add-course" className="menu-link">
            <FaPlusCircle className="icon" />
            <span>Add Course</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/progress" className="menu-link">
            <FaChartLine className="icon" />
            <span>Progress</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/profile" className="menu-link">
            <FaUser className="icon" />
            <span>Profile</span>
          </NavLink>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;