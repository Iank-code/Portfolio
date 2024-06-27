import JobHistory from "../job_history/JobHistory.js";
import "./body.css";
import Project from "./projects/Project.js";

function Body() {
  return (
    <div className="body">
      <div className="intro">
        <p
          style={{
            color: "rgb(3, 179, 3)",
          }}
        >
          Hi, my name is
        </p>
        <h1>
          <em> Ian Kamau</em>
        </h1>

        {/* Basic description about my self */}
        <div className="about">
          <h3>About Me</h3>
          <p>Hello,</p>
          <p
          className="text-desc"
          style={{
            color: "#c0c0c0",
            marginTop: "10px",
          }}
        >
          I am a dedicated and skilled full-stack software engineer with a strong command of SCSS, React, Next.js, TypeScript, and Ruby on Rails. My journey into software engineering began with a deep fascination for creating impactful digital solutions. Graduating from Moringa School, a prestigious coding bootcamp in Africa, equipped me with a solid foundation in both frontend and backend development.
        </p>
        <br />
        <p
          className="text-desc"
          style={{
            color: "#c0c0c0",
          }}
        >
          Driven by a passion for innovation and problem-solving, I excel in architecting robust web applications that combine sleek user interfaces with efficient backend functionalities. My proficiency extends to database management, API integration, and crafting responsive, dynamic user experiences. I thrive in collaborative environments, where my ability to deliver scalable and user-centric solutions shines through.
        </p>

        <br />
        <p
          className="text-desc"
          style={{
            color: "#c0c0c0",
          }}
        >
          With a commitment to continuous learning and a keen eye for emerging technologies, I am poised to tackle new challenges and contribute effectively to cutting-edge projects. I am enthusiastic about leveraging my expertise to drive success and innovation in the ever-evolving field of full-stack development.
        </p>

        <button>Let's talk</button>
        </div>
      </div>


      {/* For about all tools and technologies that i use */}
      <div>
        <h3>Tools and Technologies</h3>
        <div className="technologies-wrapper">
          <div className="tools">
            <h4>Here are the tools I use</h4>
            <ul>
              <li>GitHub</li>
              <li>Figma</li>
              <li>VS Code</li>
              <li>PyCharm</li>
            </ul>
          </div>
          <div className="tools">
            <h4>Here are the technologies I use</h4>

            <div className="technologies-divide">
              {/* For first technologies */}
              <ul>
                <li>Sass</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>React Js</li>
                <li>Redux Toolkit</li>
              </ul>

              {/* For second technologies */}
              <ul>
                <li>Next Js</li>
                <li>Ruby on Rails</li>
                <li>Node Js</li>
                <li>UI UX Design (Basics)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* For experience */}
      <JobHistory/>
      {/* For Projects */}
      <Project />
      {/* Contact */}
      {/* Footer */}
    </div>
  );
}

export default Body;
