import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { Typography } from "@mui/material";

const TimelineItemWrapper = ({year, title, description}) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        {year}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="h5" color={"primary"}>
          {title}
        </Typography>
        <Typography color="text.secondary">{description}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineItemWrapper;
