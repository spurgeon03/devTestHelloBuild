import { useState } from 'react';

import { useLocalStorage } from './useLocalStorage';
import { useUser } from '../App/useUser';

function useFavorites() {
  const { getUserId } = useUser();
  const { item: favorites, saveItem: saveFavorites } = useLocalStorage('FAVORITES_V1', []);

  const totalFavorites = favorites.filter(({ idUser }) => idUser === getUserId()).length;
  const [searchValue, setSearchValue] = useState('');

  let searchedFavorites = [];

  if (searchValue.length > 0) {
    searchedFavorites = favorites.filter(({ name, idUser }) => {
      const favoriteText = name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return favoriteText.includes(searchText) && idUser === getUserId();
    });
  } else {
    searchedFavorites = favorites.filter(({ idUser }) => idUser === getUserId());
  }

  const addFavorite = (idUser, repository) => {
    const newFavorites = [...favorites];
    newFavorites.push({ ...repository, idUser });
    saveFavorites(newFavorites);
  };

  const deleteFavorite = (idUser, repositoryId) => {
    const favoriteIndex = favorites.findIndex(
      (repository) => repository.id === repositoryId && repository.idUser === idUser,
    );
    const newFavorites = [...favorites];
    newFavorites.splice(favoriteIndex, 1);
    saveFavorites(newFavorites);
  };

  const isFavorite = (idUser, repositoryId) => {
    const favoriteIndex = favorites.findIndex(
      (repository) => repository.id === repositoryId && repository.idUser === idUser,
    );
    return favoriteIndex >= 0 ? true : false;
  };

  const resetFavorites = () => {
    saveFavorites([]);
  };

  return {
    totalFavorites,
    searchValue,
    setSearchValue,
    searchedFavorites,
    addFavorite,
    deleteFavorite,
    isFavorite,
    resetFavorites,
  };
}

export { useFavorites };
