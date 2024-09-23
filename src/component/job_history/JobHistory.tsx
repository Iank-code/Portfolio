import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./jobHistory.css";

export default function JobHistory() {
  return (
    <div className="project">
      <h3>Experience</h3>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="June 2024 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <div
            style={{
              color: "black",
            }}
            className="job-container"
          >
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Giga Cypher System Limited <h5>NBI, Kenya</h5>{" "}
            </h3>
            <h4 className="vertical-timeline-element-title">
              Ruby on Rails Developer
            </h4>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "white", color: "rgb(33, 150, 243)" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="October 2023 - May 2024"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        >
          <div
            style={{
              color: "black",
            }}
            className="job-container"
          >
            <h3
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Everest Tech Hub <h5>NBI, Kenya</h5>{" "}
            </h3>

            <h4 className="vertical-timeline-element-title">
              Technical Mentor & Software Engineer
            </h4>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
