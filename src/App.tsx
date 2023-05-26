import "./App.css";
import "./navbar.css";
import Sidebar from "./component/sidebar/Sidebar.js";
import Body from "./component/body/Body.js";

function App() {
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
    <div className="app-container">
      <div className="navbar-container">
        <div className="name">
          <h3>Ian Kamau</h3>
        </div>
        <div className="links">
          {/* <span>.About()</span>
          <span onClick={() => scrollToAbout()}>.Contact()</span> */}
          <span>.Projects()</span>
          <button className="nav-button" onClick={() => downloadCV()}>
            Resume
          </button>
        </div>
      </div>

      <div className="app-separate">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
