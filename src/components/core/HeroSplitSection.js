import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../common/CustomButton";
import ArrowedButton from "../common/ArrowedButton";
import BoltIcon from "@mui/icons-material/Bolt";

const HeroSplitSection = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          width: { xs: "auto", md: "50%" },
          height: { xs: "50vh", md: "auto" },
          backgroundImage: "url(/images/About-Us.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#ccc",
          display: "flex",
          alignItems: { xs: "center", md: "flex-end" },
          justifyContent: "center",
          p: { xs: 3, md: 6 },
        }}
      >
        <Box
          maxWidth={{ xs: "90%", md: "70%" }}
          textAlign={{ xs: "center", md: "left" }}
          sx={{ mb: { xs: 2, md: 4 } }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.8rem" },
              fontFamily: "Manrope",
            }}
          >
            It’s also about creating the best work environment.
          </Typography>
          <CustomButton
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#1a1aff",
              color: "#fff",
              textTransform: "none",
              padding: { xs: "8px 16px", md: "10px 20px" },
              fontFamily: "Manrope",
              display: "block",
              margin: { xs: "0 auto", md: "unset" },
            }}
          >
            About us
          </CustomButton>
        </Box>
      </Box>

      <Box
        sx={{
          width: { xs: "auto", md: "50%" },
          height: { xs: "50vh", md: "auto" },
          backgroundImage: "url(/images/Careers.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#ccc",
          display: "flex",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          p: { xs: 3, md: 6 },
        }}
      >
        <Box
          maxWidth={{ xs: "90%", md: "70%" }}
          textAlign={{ xs: "center", md: "left" }}
          sx={{ mt: { xs: 2, md: 4 } }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: 600,
              mb: 1,
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
              fontFamily: "Manrope",
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <BoltIcon sx={{ color: "#cc00ff", fontSize: "1.25rem", mr: 0.5 }} />
            /academy
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.2rem", md: "1.5rem" },
              whiteSpace: "normal",
              fontFamily: "Manrope",
            }}
          >
            Sharing knowledge and growing as a community.
          </Typography>
          <ArrowedButton
            sx={{
              textTransform: "none",
              padding: { xs: "8px 16px", md: "10px 20px" },
              fontFamily: "Manrope",
              color: "#fff",
              margin: { xs: "0 auto", md: "unset" },
            }}
          >
            Careers
          </ArrowedButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSplitSection;
