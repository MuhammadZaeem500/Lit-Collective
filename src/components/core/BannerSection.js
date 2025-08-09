import React from "react";
import { Box } from "@mui/material";

const BannerSection = () => {
  return (
    <Box
      sx={{
        height: { xs: "50vh", sm: "100vh", md: "100vh" },
        backgroundColor: "#000",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
        marginTop: { xs: "-240px", md: "-100px" },
      }}
    >
      <Box
        component="img"
        src="/images/div.png"
        alt="Banner Image"
        sx={{
          maxWidth: "100%",
          maxHeight: "100%",
          objectFit: "contain",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </Box>
  );
};

export default BannerSection;
