import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ArrowedButton from '../ArrowedButton';
import CustomButton from '../CustomButton';
import BoltIcon from '@mui/icons-material/Bolt';

const HeroSplitSection = () => {
  return (
    <Grid
      container
      sx={{
        height: { xs: 'auto', md: '100vh' },
        minHeight: { xs: '60vh', md: '100vh' },
        flexWrap: 'nowrap',
      }}
    >
      {/* Left Side - Information at the bottom */}
      <Grid
        item
        xs={6}
        sx={{
          backgroundImage: 'url(/images/About-Us.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#ccc',
          display: 'flex',
          alignItems: 'flex-end', // Position content at the bottom
          justifyContent: 'center',
          p: { xs: 2, md: 6 },
          minHeight: '300px',
        }}
      >
        <Box maxWidth="70%" textAlign="left" sx={{ mb: { xs: 2, md: 4 } }}>
          <Typography
            variant="h5"
            sx={{
              color: '#fff',
              mb: 2,
              fontSize: { xs: '1.2rem', md: '1.8rem' },
              fontFamily: 'Manrope',
            }}
          >
            It’s also about creating the best work environment.
          </Typography>
          <CustomButton
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#1a1aff',
              color: '#fff',
              textTransform: 'none',
              padding: { xs: '6px 12px', md: '10px 20px' },
              fontFamily: 'Manrope',
            }}
          >
            About us
          </CustomButton>
        </Box>
      </Grid>

      {/* Right Side - Information at the top */}
      <Grid
        item
        xs={6}
        sx={{
          backgroundImage: 'url(/images/Careers.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#ccc',
          display: 'flex',
          alignItems: 'flex-start', // Position content at the top
          justifyContent: 'center',
          p: { xs: 2, md: 6 },
          minHeight: '300px',
        }}
      >
        <Box maxWidth="70%" textAlign="left" sx={{ mt: { xs: 2, md: 4 } }}>
          <Typography
            variant="h6"
            sx={{
              color: '#fff',
              fontWeight: 600,
              mb: 1,
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontFamily: 'Manrope',
            }}
          >
          <BoltIcon sx={{ color: '#cc00ff', fontSize: { xs: '1rem', md: '1.25rem' }, mr: 0.5 }} />
            <Box component="span">/</Box>academy
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: '#fff',
              mb: 2,
              fontSize: { xs: '1.2rem', md: '1 rem' },
              whiteSpace: 'normal',
              fontFamily: 'Manrope',
            }}
          >
            Sharing knowledge and growing as a community.
          </Typography>
          <ArrowedButton
            sx={{
              textTransform: 'none',
              padding: { xs: '6px 12px', md: '10px 20px' },
              fontFamily: 'Manrope',
              color: '#fff',
            }}
          >
            Careers
          </ArrowedButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HeroSplitSection;