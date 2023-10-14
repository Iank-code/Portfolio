import "./project.css";
import beeKissed from "./../../../assets/projects/beekissedimg.png";

function Project() {
  return (
    <div className="project">
      <h3>Projects</h3>
      <div className="projects-container">
        {/* Beekissed project */}
        <div className="each-project">
          <div className="project-info">
            <h2>
              <em>BeeKissed Honey</em>
            </h2>
            <p>
              Cloud storage is a very popular storage solution in the modern
              time.
              <br />
              It provides an easy way for one <br /> to organize their files in
              an accessible manner.
              <br />
              Moringa Box provides a solution to cloud storage.
            </p>

            <div
              style={{
                display: "flex",
                gap: "30px",
                paddingTop: "10px",
              }}
            >
              <a href="https://client-beecoders.vercel.app/" target="_blank">
                Live
              </a>
            </div>
          </div>
          <img src={beeKissed} alt={beeKissed} className="image" />
        </div>

        {/* Moringa Box project */}
        <div className="each-project">
          <div className="project-info">
            <h2>
              <em>Moringa Box</em>
            </h2>
            <p>
              Cloud storage is a very popular storage solution in the modern
              time.
              <br />
              It provides an easy way for one <br /> to organize their files in
              an accessible manner.
              <br />
              Moringa Box provides a solution to cloud storage.
            </p>

            <div
              style={{
                display: "flex",
                gap: "30px",
                paddingTop: "10px",
              }}
            >
              <a
                href="https://github.com/phase-5-moringa-box-project/moringa-box"
                target="_blank"
              >
                Github Link
              </a>
              <a href="https://moringa-box.vercel.app/" target="_blank">
                Live
              </a>
            </div>
          </div>
          <iframe
            style={{ border: " 1px solid rgba(0, 0, 0, 0.1)," }}
            width="600"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWaiJ4auhTx2AFauwGmnv3x%2FUntitled%3Ftype%3Ddesign%26node-id%3D207-2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D207%253A2%26show-proto-sidebar%3D1"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Project;
