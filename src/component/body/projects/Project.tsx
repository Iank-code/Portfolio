import "./project.css";
import beeKissed from "./../../../assets/projects/beekissedimg.png";
import quadvendor from "./../../../assets/quadvendor.png";
import smartply from "./../../../assets/smartply.png";

function Project() {
  return (
    <div className="project">
      <h3>Projects</h3>
      <div className="projects-container">
        {/* Beekissed project */}
        <div className="each-project">
          <div className="project-info">
            <h2>
              <em>Quadvendor</em>
            </h2>
            <p>
              Quadvendor is a point-of-sale (POS) system designed to empower
              business owners by simplifying inventory management and sales
              tracking. It provides real-time updates on stock levels, sales,
              and product performance enabling users to efficiently monitor
              inventory, manage pricing and track customer orders. With
              features like automated low-stock alerts detailed reporting, and
              an intuitive interface, Quadvendor helps businesses streamline
              operations reduce manual errors, and make data-driven decisions
              to enhance profitability and growth.
            </p>

            <div
              style={{
                display: "flex",
                gap: "30px",
                paddingTop: "10px",
              }}
            >
              <a href="https://quadvendor.net/" target="_blank">
                Live
              </a>
            </div>
          </div>
          <img src={quadvendor} alt={quadvendor} className="image" />
        </div>

        {/* Beekissed project */}
        <div className="each-project">
          <div className="project-info">
            <h2>
              <em>Smartplyconnect</em>
            </h2>
            <p>
              Smartply is your one-stop shop for all things beauty! Launched in
              early 2024, we're a registered online beauty business operating
              under Smartply Merchants Limited, following the Companies Act
              2015. At Smartply, we're passionate about two things: online
              shopping and empowering the beauty industry through offering
              original products. We offer a seamless online shopping experience
              for beauty enthusiasts, while also providing a marketplace for
              beauty professionals to get all beauty products under one roof.
            </p>

            <div
              style={{
                display: "flex",
                gap: "30px",
                paddingTop: "10px",
              }}
            >
              <a href="https://smartplyconnect.com/" target="_blank">
                Live
              </a>
            </div>
          </div>
          <img src={smartply} alt={smartply} className="image" />
        </div>

        {/* Beekissed project */}
        <div className="each-project">
          <div className="project-info">
            <h2>
              <em>BeeKissed Honey</em>
            </h2>
            <p>
              BeeKissed Honey is an e-commerce platform  that allows
              customers to purchase sweet honey products ensuring  fast
              delivery.
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
              
              It provides an easy way for one  to organize their files in
              an accessible manner.
              
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
