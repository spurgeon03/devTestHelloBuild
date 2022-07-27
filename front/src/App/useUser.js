import { useLocalStorage } from './useLocalStorage';
import { useHistory } from 'react-router-dom';

function useUser() {
  const { push } = useHistory();
  const { isReady, item: user, saveItem } = useLocalStorage('USER_V1', {});

  const isLoggedIn = () => {
    return user?.token ? true : false;
  };

  const getGitHubUser = () => {
    return user?.username;
  };

  const getUserId = () => {
    return user?.id;
  };

  const setUserSession = (user) => {
    saveItem(user);
  };

  const logout = () => {
    saveItem({});
    push('/login');
  };

  return {
    isReady,
    isLoggedIn,
    getUserId,
    getGitHubUser,
    setUserSession,
    logout,
  };
}

export { useUser };
