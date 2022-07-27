import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useUser } from '../App/useUser';

const ProtectedRoute = ({ children }) => {
  const { push } = useHistory();
  const { isReady, isLoggedIn } = useUser();

  useEffect(() => {
    if (isReady) {
      if (!isLoggedIn()) {
        push('/login');
      }
    }
  }, [isLoggedIn]);

  return children;
};

export { ProtectedRoute };
