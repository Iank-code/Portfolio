import "./navbar.css";
import { NavLink } from "react-router-dom";
import IanKamau from "./../../assets/Ian_Kamau.pdf";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="name">
        <NavLink to="/">
          <h3>Ian Kamau</h3>
        </NavLink>
      </div>
      <div className="links">
        <NavLink to="/all">.Projects()</NavLink>
        <a className="nav-button" href={IanKamau} download>
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
