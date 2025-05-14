import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import CustomButton from '../common/CustomButton';
import ArrowedButton from '../common/ArrowedButton';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        padding: { xs: 4, md: 6 },
        minHeight: { xs: '200px', md: '250px' },
      }}
    >
      <Grid container alignItems="center" spacing={4}>
        {/* Left Section */}
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Manrope',
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              mb: { xs: 2, md: 4 },
              color: '#fff',
              lineHeight: 1.2,
              whiteSpace: 'pre-wrap',
            }}
          >
            Your business will<br />never be the same
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: 'Manrope',
              color: '#ccc',
              fontSize: { xs: '0.75rem', md: '0.9rem' },
            }}
          >
            LitCollective © 2022
          </Typography>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-end' },
              marginLeft: { xs: 0, md: '300px' },
              gap: 2,
            }}
          >
            {/* Buttons */}
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: 2, flexWrap: 'wrap',marginBottom: { xs: 2, md: "100px" } }}> 
              <ArrowedButton>Talk to a specialist</ArrowedButton>
              <CustomButton
                variant="contained"
                sx={{
                  backgroundColor: '#1a1aff',
                  color: '#fff',
                  textTransform: 'none',
                  padding: { xs: '8px 16px', md: '10px 20px' },
                  fontFamily: 'Manrope',
                }}
              >
                Get in touch
              </CustomButton>
            </Box>

            {/* Social Icons */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                gap: 3,
                opacity: 0.8,
                fontWeight: 300,
                flexWrap: 'wrap',
              }}
            >
              {[
                { name: 'Behance', src: '/images/Behance.png' },
                { name: 'Dribbble', src: '/images/Behance.png' },
                { name: 'Twitter', src: '/images/Twitter.png' },
                { name: 'Instagram', src: '/images/Instagram.png' },
                { name: 'Medium', src: '/images/Medium.png' },
              ].map((icon) => (
                <Box key={icon.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box
                    component="img"
                    src={icon.src}
                    alt={icon.name}
                    sx={{
                      width: '24px',
                      height: '24px',
                      imageRendering: 'crisp-edges', // or 'pixelated'
                    }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ fontFamily: 'Manrope', color: '#ccc', fontSize: '0.75rem' }}
                  >
                    {icon.name}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
