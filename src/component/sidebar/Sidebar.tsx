import "./sidebar.css";
import github from "./../../assets/github.png";
import linkedin from "./../../assets/linkedin.png";


function Sidebar() {
  return (
    <div className="sidebar">
      {/* For github */}
      <a href="https://github.com/Iank-code" target="_blank">
        <img src={github} alt="github image" width={30} height={30} />
      </a>

      {/* For linked in */}
      <a
        href="https://www.linkedin.com/in/ian-kamau-72b57b214/"
        target="_blank"
      >
        <img src={linkedin} alt="LinkedIn image" width={30} height={30} />
      </a>
      <hr className="vertical-hr" />
    </div>
  );
}

export default Sidebar;
