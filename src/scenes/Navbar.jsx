import {
  EmailOutlined,
  Twitter,
  LinkedIn,
  Instagram,
  GitHub,
  LightModeOutlined,
  DarkModeOutlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton, Typography, useTheme } from "@mui/material";
import Flexbetween from "components/Flexbetween";
import React from "react";

const Navbar = ({ mode, setMode }) => {
  const theme = useTheme();
  const neutral = theme.palette.neutral.main;
  return (
    <Box padding={"1rem 6%"}>
      <Flexbetween mb={"0.5rem"}>
        <Flexbetween gap={"0.5rem"}>
          <IconButton>
            <EmailOutlined />
          </IconButton>
          <Typography variant="p" color={neutral} p={"8px 0"}>
            topeenikankiselu@gmail.com
          </Typography>
        </Flexbetween>
        <Flexbetween gap={"1rem"}>
          <IconButton>
            <LinkedIn />
          </IconButton>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <Instagram />
          </IconButton>
          <IconButton>
            <GitHub />
          </IconButton>
          {mode === "dark" ? (
            <IconButton onClick={() => setMode("light")}>
              <LightModeOutlined />
            </IconButton>
          ) : (
            <IconButton onClick={() => setMode("dark")}>
              <DarkModeOutlined />
            </IconButton>
          )}
        </Flexbetween>
      </Flexbetween>
      <Divider />
    </Box>
  );
};

export default Navbar;
