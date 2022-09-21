import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkIcon from '@mui/icons-material/Work';
import "../Styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e479a">
      <VerticalTimelineElement
          className="vertical-timeline-element--edication"
          date="2021 - present"
          iconStyle={{ background: "#f7e62d", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer at Globant India
          </h3>
          <p>Worked on UI and Backend for 1 client</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--edication"
          date="2014 - 2018"
          iconStyle={{ background: "#3e479a", color: "#fff" }}
          icon={<SchoolRoundedIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Pimpri Chinchwad College of Engineering,Pune
          </h3>
          <p>Information Technology</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--edication"
          date="2012 - 2014"
          iconStyle={{ background: "#3e479a", color: "#fff" }}
          icon={<SchoolRoundedIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            R.Y.K. SCIENCE COLLEGE
          </h3>
          <p>Science</p>
        </VerticalTimelineElement>


        
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
