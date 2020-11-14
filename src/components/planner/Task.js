import React, { useState } from "react";
import Assigned from "./Assigned";
import CardNav from "./CardNav";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

export default function Task(props) {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  console.log(props.title);
  return (
    <article className="Task">
      Task
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography>
            <h2 className="title">{props.title}</h2>
          </Typography>{" "}
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.description}</Typography>
        </AccordionDetails>
        <AccordionSummary>
          <Typography>
            <h2 className="title">{props.title}</h2>
            <p className="category">{props.category}</p>
          </Typography>{" "}
          <Typography>
            <p className="Due:"> Due: {props.due}</p>{" "}
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Assigned />
      <CardNav />
    </article>
  );
}
