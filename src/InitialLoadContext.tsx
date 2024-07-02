import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface InitialLoadContextProps {
  isInitialLoad: boolean;
  setIsInitialLoad: (value: boolean) => void;
}

const InitialLoadContext = createContext<InitialLoadContextProps>({
  isInitialLoad: true,
  setIsInitialLoad: () => {},
});

interface InitialLoadProviderProps {
  children: ReactNode;
}

export const InitialLoadProvider: React.FC<InitialLoadProviderProps> = ({ children }) => {
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setIsInitialLoad(false);
  }, []);

  return (
    <InitialLoadContext.Provider value={{ isInitialLoad, setIsInitialLoad }}>
      {children}
    </InitialLoadContext.Provider>
  );
};

export const useInitialLoad = () => useContext(InitialLoadContext);
