import { Header } from '../Header';
import { useUser } from '../App/useUser';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import './Profile.css';

const Profile = () => {
  const { getGitHubUser } = useUser();

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <div className="Profile">
          <h2>Github Username: {getGitHubUser()}</h2>
          <p>
            <b>*Important:</b> All repositories will be bring based on your username on github. If
            you want see other user please logout and sing up with new username
          </p>
        </div>
      </Container>
      <Link to="/" className="HomeButton">
        <MdHome />
      </Link>
    </>
  );
};

export { Profile };
