import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../common/CustomButton";
import ArrowedButton from "../common/ArrowedButton";

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        padding: { xs: 2, sm: 4, md: 6 },
        textAlign: { xs: "center", md: "left" },
        position: "relative",
      }}
    >
      <Box
        sx={{
          maxWidth: { xs: "100%", md: "50%" },
          padding: { xs: 2, md: 0 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "light",
            lineHeight: 1.2,
            marginBottom: 4,
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            fontFamily: "Manrope",
            marginLeft: "15%",
          }}
        >
          We design experiences that move businesses to the future.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 2,
            marginLeft: "15%",
          }}
        >
          <ArrowedButton>
            <Typography
              sx={{
                fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1.2rem" },
              }}
            >
              Play showreel
            </Typography>
          </ArrowedButton>
          <CustomButton>
            <Typography
              sx={{
                fontSize: { xs: "0.7rem", sm: "0.9rem", md: "1.2rem" },
              }}
            >
              About us
            </Typography>
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
