import * as React from "react";
import Timeline from "@mui/lab/Timeline";

import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import { trainings } from "data";
import TimelineItemWrapper from "components/TimelineItemWrapper";

export default function Experiences() {
  const theme = useTheme();
  const alt = theme.palette.background.alt;

  return (
    <Timeline position="alternate" sx={{ backgroundColor: alt, p: "4rem 6%" }}>
      <Typography
        variant="h2"
        textAlign={"center"}
        mb={"2rem"}
        textTransform={"uppercase"}
        color={"primary"}
      >
        Trainings & Certifications
      </Typography>
      {trainings.map(({ year, title, description }, index) => (
        <TimelineItemWrapper
          key={index}
          year={year}
          title={title}
          description={description}
        />
      ))}
    </Timeline>
  );
}
