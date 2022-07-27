import React from 'react';
import { MdFavorite } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import { Header } from '../Header';
import { Repository } from '../Repository';
import { useUser } from '../App/useUser';
import { useFavorites } from '../App/useFavorites';
import { useRepositories } from '../App/useRepositories';
import { RepositoriesSearch } from '../RepositoriesSearch';
import { Loading } from '../Loading';
import './Home.css';

const Home = () => {
  const { getUserId } = useUser();
  const { addFavorite, isFavorite } = useFavorites();

  const { loadingGithub, totalRepositories, searchedRepositories, searchValue, setSearchValue } =
    useRepositories();

  if (loadingGithub) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <div className="Home">
          <h1>You have {totalRepositories} repositories.</h1>

          <RepositoriesSearch searchValue={searchValue} setSearchValue={setSearchValue} />

          {loadingGithub && <Loading />}

          <ul className="Repositories-List">
            {searchedRepositories.map((repository) => (
              <Repository key={repository.id} name={repository.name} url={repository.url}>
                {!isFavorite(getUserId(), repository.id) && (
                  <IconButton
                    aria-label="add to favorites"
                    onClick={() => addFavorite(getUserId(), repository)}
                  >
                    <FavoriteIcon />
                  </IconButton>
                )}
              </Repository>
            ))}
          </ul>
          <Link to="favorites" className="FavoritesButton">
            <MdFavorite />
          </Link>
        </div>
      </Container>
    </>
  );
};

export { Home };
