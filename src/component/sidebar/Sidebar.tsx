import "./sidebar.css";
import github from "./../../assets/github.png";
import twitter from "./../../assets/twitter.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="https://github.com/Iank-code" target="_blank">
        <img src={github} alt="github image" width={30} height={30} />
      </a>
      <a href="https://twitter.com/Ian_KamauKE" target="_blank">
        <img src={twitter} alt="github image" width={30} height={30} />
      </a>
      <hr className="vertical-hr" />
    </div>
  );
}

export default Sidebar;
