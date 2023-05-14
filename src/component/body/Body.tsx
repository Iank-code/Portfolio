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
            <h5>About Me</h5>
            <p>Hello, My name is Ian Kamau. </p>
        </div>
        <div className="technologies"></div>
      </div>
    </div>
  );
}

export default Body;
