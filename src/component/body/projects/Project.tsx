import "./project.css";

function Project() {
  return (
    <div className="project">
      <h3>Projects</h3>
      <div className="projects-container">
        <div className="project-info">
          <h4>
            <em>Moringa Box</em>
          </h4>
        </div>
        <iframe
          style={{ "border": " 1px solid rgba(0, 0, 0, 0.1)," }}
          width="600"
          height="450"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FWaiJ4auhTx2AFauwGmnv3x%2FUntitled%3Ftype%3Ddesign%26node-id%3D207-2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D207%253A2%26show-proto-sidebar%3D1"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Project;
