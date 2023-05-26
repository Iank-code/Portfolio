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
        <p
          style={{
            color: "#c0c0c0",
            marginTop: "10px",
          }}
        >
          I am a skilled developer with expertise in SCSS, React, Next.js, and
          TypeScript,
          <br />
          as well as experience with Ruby on Rails.
          <br />
          Graduated from Moringa School, a leading coding bootcamp in Africa.
          <br />I am currently learning python and UI UX design with figma.
        </p>

        <button>Let's talk</button>
      </div>

      {/* Basic description about my self */}
      <div className="about">
        <h3>About Me</h3>
        <p>Hello,</p>
        <p
          style={{
            color: "#c0c0c0",
          }}
        >
          My passion for software engineering began when I saw the movie{" "}
          <em style={{ color: "white" }}>Social Dilemma</em>. <br />
          I decided to enroll myself into Moringa School, a leading bootcamp in
          Africa.
          <br />
          In the capstone project at Moringa School, I worked on both the
          frontend and backend.
          <br />
          I am comfortable working with databases, APIs, and server-side
          technologies,
          <br />
          as well as designing and implementing dynamic user interfaces.
          <br />I am excited to take on challenging projects and collaborate
          with teams
          <br />
          to create engaging and effective web applications.
        </p>
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
                <li>Python Basics</li>
                <li>UI UX Design (Basics)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* For experience */}
      {/* For Projects */}
      <Project />
      {/* Contact */}
      {/* Footer */}
    </div>
  );
}

export default Body;
