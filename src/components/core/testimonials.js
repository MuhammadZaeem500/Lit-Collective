import React from 'react';
import { Box } from '@mui/material';
import CustomButton from '../common/CustomButton';
import ArrowedButton from '../common/ArrowedButton';

const Testimonials = () => {
  const logos = [
    { src: '/images/Triple-Whale.png', alt: 'Triple Whale' },
    { src: '/images/Hand-Cash.png', alt: 'Handcash' },
    { src: '/images/Ascend-Ex.png', alt: 'AscendEX' },
    { src: '/images/Mojo-Heads.png', alt: 'MojoHeads' },
    { src: '/images/Vera.png', alt: 'Vera' },
    { src: '/images/Fin-Net.png', alt: 'Finnet' },
    { src: '/images/Trove-Mate.png', alt: 'Trove Mate' },
    { src: '/images/Foundry-Dao.png', alt: 'Foundry DAO' },
    { src: '/images/Nycrypto.png', alt: 'Nycrypto' },
    { src: '/images/Soclly.png', alt: 'Socly' },
    { src: '/images/Fly-Wallet.png', alt: 'Flywallet' },
    { src: '/images/Dolphin.png', alt: 'Dolphin' },
  ];

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        py: 8,
        px: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: 4,
          justifyItems: 'center',
          width: '100%',
          maxWidth: '900px',
        }}
      >
        {logos.map((logo, index) => (
          <Box
            key={index}
            component="img"
            src={logo.src}
            alt={logo.alt}
            sx={{
              width: '100%',
              maxWidth: '150px',
              height: 'auto',
              filter: 'grayscale(100%)',
              opacity: 0.8,
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <CustomButton>
          What we do
        </CustomButton>
        <ArrowedButton>
          Testimonials
        </ArrowedButton>
      </Box>
    </Box>
  );
};

export default Testimonials;
