import { Divider, Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box p={"1rem 6%"}>
      <Divider />
      <Typography mt={"1rem"}>
       &copy; 2023 Temitope Enikankiselu
      </Typography>
    </Box>
  );
};

export default Footer;
