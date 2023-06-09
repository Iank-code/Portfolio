import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  // Function for downloading
  const downloadCV = () => {
    fetch(`https://portfolio-backend-lpw2.onrender.com/documents/1`, {
      method: "GET",
    })
      .then((response) => response.blob())
      .then((data) => {
        console.log(data);

        const url = window.URL.createObjectURL(new Blob([data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `Ian Kamau.pdf`);
        // 3. Append to html page
        document.body.appendChild(link);
        // 4. Force download
        link.click();
      });
  };
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
        <button className="nav-button" onClick={() => downloadCV()}>
          Resume
        </button>
      </div>
    </div>
  );
}

export default Navbar;
