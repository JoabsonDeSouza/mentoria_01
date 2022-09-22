import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { createList } from '../mocks/searchList';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [listSearch, setListSearch] = useState([]);
  const [listOriginal, setListOriginal] = useState([]);
  const [valueSearch, setValueSearch] = useState('');

  const updateValueSearch = useCallback(text => {
    setValueSearch(text);
  }, []);

  const init = useCallback(async () => {
    const result = await createList();
    setListOriginal(result);
  }, []);

  useEffect(() => {
    init();
  }, []);

  return (
    <AppContext.Provider
      value={{
        listSearch,
        listOriginal,
        updateValueSearch,
        valueSearch,
      }}>
      {children}
    </AppContext.Provider>
  );
};

function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used inside AppContext');
  }

  return context;
}

export { AppProvider, useApp };
