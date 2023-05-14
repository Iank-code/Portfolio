import "./navbar.css";
// import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="name">
        <h3>Ian Kamau</h3>
      </div>
      <div className="links">
        <a href="#">.About()</a>
        <a href="#">.Contact()</a>
        <a href="#">.Project()</a>
        {/* <NavLink to="#" /> */}
        <button className="nav-button">Resume</button>
      </div>
    </div>
  );
}

export default Navbar;
