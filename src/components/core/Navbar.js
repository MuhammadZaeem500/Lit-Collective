import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          sx={{
            width: "25vw",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{
              height: { sm: "20px", lg: "40px" },
            }}
          />
        </Box>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
            alignItems: "center",
            gap: 3,
          }}
        >
          <Button
            sx={{
              color: "white",
              textTransform: "lowercase",
              fontWeight: 300,
              fontFamily: "Manrope",
            }}
          >
            home
          </Button>
          <Button
            sx={{
              color: "white",
              textTransform: "lowercase",
              fontWeight: 300,
              fontFamily: "Manrope",
            }}
          >
            cases studies
          </Button>
          <Button
            sx={{
              color: "white",
              textTransform: "lowercase",
              fontWeight: 300,
              fontFamily: "Manrope",
            }}
          >
            about us
          </Button>
          <Button
            sx={{
              color: "white",
              textTransform: "lowercase",
              fontWeight: 300,
              fontFamily: "Manrope",
            }}
          >
            careers
          </Button>
          <Button
            sx={{
              color: "white",
              textTransform: "lowercase",
              fontWeight: 300,
              fontFamily: "Manrope",
            }}
          >
            what we do
          </Button>
          <Button
            sx={{
              color: "white",
              textTransform: "lowercase",
              fontWeight: 300,
              fontFamily: "Manrope",
            }}
          >
            contact
          </Button>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontFamily: "Manrope",
            }}
          >
            <img
              src="https://flagcdn.com/us.svg"
              alt="US"
              style={{ width: 20, height: "auto" }}
            />
            <Typography sx={{ fontSize: 14, fontFamily: "Manrope" }}>
              EN-US
            </Typography>
            <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
          </Box>
        </Box>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="menu"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorElNav}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: "block", md: "none" } }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ fontFamily: "Manrope" }}>home</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ fontFamily: "Manrope" }}>
                cases studies
              </Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ fontFamily: "Manrope" }}>about us</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ fontFamily: "Manrope" }}>careers</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ fontFamily: "Manrope" }}>what we do</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography sx={{ fontFamily: "Manrope" }}>contact</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src="https://flagcdn.com/us.svg"
                  alt="US"
                  style={{ width: 20, height: "auto" }}
                />
                <Typography sx={{ fontSize: 14, fontFamily: "Manrope" }}>
                  EN-US
                </Typography>
                <KeyboardArrowDownIcon sx={{ fontSize: 18 }} />
              </Box>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
