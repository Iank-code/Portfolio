import "./App.css";
import Navbar from "./component/navbar/Navbar.js";
import Sidebar from "./component/sidebar/Sidebar.js";
import Body from "./component/body/Body.js";

function App() {
  
  return (
    <div className="app-container">
      <Navbar />

      <div className="app-separate">
        <Sidebar />
        <Body />
      </div>
    </div>
  );
}

export default App;
