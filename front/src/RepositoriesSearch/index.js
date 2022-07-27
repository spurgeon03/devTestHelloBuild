import React from 'react';

import './RepositoriesSearch.css';

const RepositoriesSearch = ({ searchValue, setSearchValue, loading }) => {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="RepositoriesSearch"
      placeholder="Find by Repository Name"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
};

export { RepositoriesSearch };
