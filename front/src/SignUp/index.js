import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { FormHandler } from '../FormHandler';
import { AlertSuccess, AlertError } from '../Alerts';
import './index.css';

const SignUp = () => {
  const { push } = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');
  const [success, setSucces] = useState('');

  const handleChanges = (e, setAction) => {
    setErrors('');
    setSucces('');
    setAction(e.target.value);
  };

  const handleRegister = async () => {
    try {
      await axios.post(process.env.REACT_APP_API_URL + 'auth/signup', {
        username,
        password,
      });

      setSucces('Seras redirigido al login en breves segundos...');
      setTimeout(() => {
        push('/profile');
      }, 3000);
    } catch ({ response }) {
      setErrors(response.data.message);
      setPassword('');
    }
  };

  return (
    <>
      {success !== '' && <AlertSuccess success={success} />}
      {errors !== '' && <AlertError errors={errors} />}

      <FormHandler
        title="Register"
        handleChanges={handleChanges}
        setUsername={setUsername}
        setPassword={setPassword}
      >
        <Button
          className="margin-form"
          variant="contained"
          size="large"
          fullWidth={true}
          onClick={handleRegister}
        >
          Sign Up
        </Button>

        <Link to="login">
          <Button variant="contained" size="large" fullWidth={true} color="secondary">
            Sign In
          </Button>
        </Link>
      </FormHandler>
    </>
  );
};

export { SignUp };
