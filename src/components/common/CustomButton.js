import React from 'react';
import { Button } from '@mui/material';

const CustomButton = ({
  children,
  variant = 'outlined',
  color = 'inherit',
  onClick,
  sx = {},
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
        borderRadius: 0,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
