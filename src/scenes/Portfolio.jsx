import { Box, Typography } from "@mui/material";
import Project from "Widgets/Project";
import { projectsData } from "data";
import React from "react";

const Portfolio = () => {
  return (
    <Box p={"4rem 6%"} textAlign={"center"}>
      <Typography
        variant="h2"
        textTransform={"uppercase"}
        mb={"2rem"}
        color={"primary"}
      >
        Projects
      </Typography>
      <Box
        display={"grid"}
        sx={{
          gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
        }}
        gap={"2rem"}
        justifyItems={"center"}
      >
        {projectsData.map((project, index) => (
          <Project
            key={index}
            imagePath={project.imagePath}
            title={project.title}
            desc={project.desc}
            appLink={project.appLink}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Portfolio;
