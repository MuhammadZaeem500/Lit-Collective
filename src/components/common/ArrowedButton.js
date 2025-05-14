import React from 'react';
import { Button, Box } from '@mui/material';

const ArrowedButton = ({
  children,
  variant = 'outlined',
  color = 'inherit',
  onClick,
  sx = { 
   },
  arrowSrc = '/images/Arrow.png', 
  ...props
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={onClick}
      sx={{
        textTransform: 'none',
        padding: { xs: '8px 16px', md: '10px 20px' },
        fontFamily: 'Manrope',
        display: 'flex',
        borderRadius: 0,
        alignItems: 'center',
        gap: 1,
        ...sx,
      }}
      {...props}
    >
      {children}
      <Box
  component="img"
  src={arrowSrc}
  alt="arrow"
  sx={{
    width: 30,
    height: 30,
    display: 'block', 
  }}
/>

    </Button>
  );
};

export default ArrowedButton;
