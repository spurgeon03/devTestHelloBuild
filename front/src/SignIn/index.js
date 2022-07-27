import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { FormHandler } from '../FormHandler';
import { AlertError } from '../Alerts';
import { useUser } from '../App/useUser';
import './index.css';

const SignIn = () => {
  const { setUserSession } = useUser();
  const { push } = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState('');

  const handleChanges = (e, setAction) => {
    setErrors('');
    setAction(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const request = await axios.post(process.env.REACT_APP_API_URL + 'auth/signin', {
        username,
        password,
      });
      setUserSession(request.data);
      push('/');
    } catch ({ response }) {
      setErrors(response.data.message);
      setPassword('');
    }
  };

  return (
    <>
      {errors !== '' && <AlertError errors={errors} />}

      <FormHandler
        title="Login"
        handleChanges={handleChanges}
        setUsername={setUsername}
        setPassword={setPassword}
      >
        <Button
          className="margin-form"
          variant="contained"
          size="large"
          fullWidth={true}
          onClick={handleLogin}
        >
          Sign In
        </Button>

        <Link to="signup">
          <Button variant="contained" size="large" fullWidth={true} color="secondary">
            Sign up
          </Button>
        </Link>
      </FormHandler>
    </>
  );
};

export { SignIn };
