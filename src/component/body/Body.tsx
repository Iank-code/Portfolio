import "./body.css";
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

      <div className="about">
        <div className="about-text">
          <h3>About Me</h3>
          <p>Hello, My name is Ian Kamau.</p>
          <p
            style={{
              color: "#c0c0c0",
            }}
          >
            My passion for software engineering began when I saw the movie{" "}
            <em style={{ color: "white" }}>Social Dilemma</em>. <br />
            I decided to enroll myself into Moringa School, a leading bootcamp
            in Africa.
            <br />
            In the capstone project at Moringa School, I worked on both the
            frontend and backend.
            <br />
            I am comfortable working with databases, APIs, and server-side
            technologies,
            <br />
            as well as designing and implementing dynamic user interfaces.
            <br />I am excited to take on challenging projects and collaborate
            with teams to create engaging and effective web applications
          </p>
        </div>
        <div className="technologies"></div>
      </div>
    </div>
  );
}

export default Body;
