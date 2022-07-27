import React from 'react';
import { MdHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Container, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { Header } from '../Header';
import { Repository } from '../Repository';
import { useUser } from '../App/useUser';
import { useFavorites } from '../App/useFavorites';
import { RepositoriesSearch } from '../RepositoriesSearch';
import './Favorites.css';

const Favorites = () => {
  const { getUserId } = useUser();
  const { totalFavorites, searchValue, setSearchValue, searchedFavorites, deleteFavorite } =
    useFavorites();

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <div className="Favorites">
          <h1>You have {totalFavorites} repositories added to Favorites</h1>
          {searchedFavorites.length > 0 && (
            <RepositoriesSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          )}
          <ul className="Repositories-List">
            {searchedFavorites.map(({ id, name, url }) => (
              <Repository key={id} name={name} url={url}>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => deleteFavorite(getUserId(), id)}
                >
                  <DeleteIcon />
                </IconButton>
              </Repository>
            ))}
          </ul>
          <Link to="/" className="HomeButton">
            <MdHome />
          </Link>
        </div>
      </Container>
    </>
  );
};

export { Favorites };
