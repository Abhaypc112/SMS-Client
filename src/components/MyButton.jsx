import React from 'react';
import Button from '@mui/material/Button';

function MyButton({ children, onClick, color = 'primary', variant = 'contained', sx }) {
  return (
    <Button
      color={color}
      variant={variant}
      onClick={onClick}
      sx={sx}
    >
      {children}
    </Button>
  );
}

export default MyButton;
