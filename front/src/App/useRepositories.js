import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

import { GET_RESPOSITORIES_QUERY } from './queries';
import { useUser } from '../App/useUser';

function useRepositories() {
  const [repositories, setRepositories] = useState([]);
  const { getGitHubUser } = useUser();

  const { loading: loadingGithub, data } = useQuery(GET_RESPOSITORIES_QUERY, {
    variables: { owner: getGitHubUser() },
  });

  useEffect(() => {
    if (!loadingGithub) {
      const current = data?.user?.repositories?.nodes ?? [];
      setRepositories(current);
    }
  }, [loadingGithub]);

  const [searchValue, setSearchValue] = useState('');

  const totalRepositories = repositories.length;

  let searchedRepositories = [];

  if (searchValue.length > 0) {
    searchedRepositories = repositories.filter((favorite) => {
      const favoriteText = favorite.name.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return favoriteText.includes(searchText);
    });
  } else {
    searchedRepositories = repositories;
  }

  return {
    loadingGithub,
    totalRepositories,
    searchValue,
    setSearchValue,
    searchedRepositories,
  };
}

export { useRepositories };
