import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


function TimeCard(prop) {
  return (
    <VerticalTimeline className="about-timeline">
      <VerticalTimelineElement
        // className="vertical-timeline-element"        
        contentStyle={{ background: "rgb(44, 54, 57)", color: "#DCD7C9", maxHeight: "40px", }}        
        date={prop.date}
        iconStyle={{ background: "#A27B5C"}}
      ></VerticalTimelineElement>
      <p className="about-p">{prop.descr}</p>     
    </VerticalTimeline>
  );
}

export default TimeCard;
