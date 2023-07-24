import { WavingHandOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <Box textAlign={"center"} p={"3rem 0"} display={"block"}>
      <img
        style={{
          objectFit: "cover",
          borderRadius: "50%",
          height: "150px",
          width: "150px",
          margin: "1rem 0",
        }}
        src="../assets/me.jpg"
        alt="avatar"
      />
      <Box
        display={"flex"}
        gap={"0.5rem"}
        justifyContent={"center"}
        mb={"1rem"}
      >
        <Typography variant="h4" textAlign={"center"} color={"primary"}>
          Hi, I'm Temitope
        </Typography>
        <WavingHandOutlined />
      </Box>
      <Typography variant="h1" textAlign={"center"} maxWidth={600} m={"auto"}>
        <Typewriter
          options={{
            strings: [
              "I build things for the web!",
              "Colaborate with brands and agencies to create impactful results",
              "Building digital products, brands, and experience",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Typography>
      <Box display={"flex"} gap={"1rem"} justifyContent={"center"} mt={"2rem"}>
        <Button
          variant="outlined"
          sx={{
            width: "20%",
          }}
        >
          Hire Me
        </Button>
        <Button
          variant="outlined"
          href="https://docs.google.com/document/d/1nfTMvnYyj8V5NzZ0imqHMb3RXF2fb-C33R_95zl9mBA/edit?usp=sharing"
        >
          View CV
        </Button>
      </Box>
    </Box>
  );
};

export default Banner;
