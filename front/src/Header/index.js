import React from 'react';
import { Link } from 'react-router-dom';

import { useUser } from '../App/useUser';
import './Header.css';

const Header = () => {
  const { getGitHubUser, logout } = useUser();

  return (
    <header className="Header">
      <div className="User">
        <Link to="profile" className="Username">
          <button className="ButtonLog">{`Github User: ${getGitHubUser()}`}</button>
        </Link>
        <button className="ButtonLog" onClick={() => logout()}>
          Logout
        </button>
      </div>
    </header>
  );
};

export { Header };
