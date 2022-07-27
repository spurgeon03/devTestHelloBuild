import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(false);
  const [isReady, setReady] = useState(false);

  useEffect(() => {
    if (!loading) {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem;

      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
      }

      setItem(parsedItem);
      setLoading(false);
      setReady(true);
    }
  }, [loading]);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setLoading(true);
    setItem(newItem);
  };

  return {
    isReady,
    item,
    saveItem,
  };
}

export { useLocalStorage };
