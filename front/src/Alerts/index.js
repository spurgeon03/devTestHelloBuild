import React from 'react';
import { Alert, AlertTitle } from '@mui/material';

const AlertSuccess = ({ success }) => (
  <Alert severity="success">
    <AlertTitle>Registro satisfactorio</AlertTitle>
    <strong>{success}</strong>
  </Alert>
);

const AlertError = ({ errors }) => (
  <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    <strong>{errors}</strong>
  </Alert>
);

export { AlertSuccess, AlertError };
