import "./navbar.css";
import { NavLink } from "react-router-dom";
import IanKamau from "./../../assets/Ian_Kamau.pdf";

function Navbar() {
  // Function for downloading
  // const downloadCV = () => {
    // fetch("https://portfolio-backend-lpw2.onrender.com/documents", {
    //   method: "GET",
    // })
    //   .then((response) => response.blob())
    //   .then((data) => {
    //     console.log(data);
    //     const url = window.URL.createObjectURL(new Blob([data]));
    //     const link = document.createElement("a");
    //     link.href = url;
    //     link.setAttribute("download", `Ian Kamau.pdf`);
    //     // 3. Append to html page
    //     document.body.appendChild(link);
    //     // 4. Force download
    //     link.click();
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  // };
  return (
    <div className="navbar-container">
      <div className="name">
        <NavLink to="/">
          <h3>Ian Kamau</h3>
        </NavLink>
      </div>
      <div className="links">
        {/* <span>.About()</span>
          <span onClick={() => scrollToAbout()}>.Contact()</span> */}
        <NavLink to="/all">.Projects()</NavLink>
        {/* <button onClick={downloadCV}>Resume</button> */}
        <a className="nav-button" href={IanKamau} download>
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
