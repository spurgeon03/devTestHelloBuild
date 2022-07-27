import React, { useState } from 'react';
import { Box, Input, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const FormHandler = ({ title, handleChanges, children, setUsername, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="sign-in-form">
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <h1>{title}</h1>
        <Input
          required
          id="user"
          label="User"
          fullWidth={true}
          placeholder="User GitHub"
          onChange={(e) => handleChanges(e, setUsername)}
        />
        <Input
          required
          id="password"
          label="Password"
          placeholder="Password"
          className="margin-form"
          fullWidth={true}
          type={showPassword ? 'text' : 'password'}
          onChange={(e) => handleChanges(e, setPassword)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={(e) => setShowPassword(!showPassword)}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />

        {children}
      </Box>
    </div>
  );
};

export { FormHandler };
