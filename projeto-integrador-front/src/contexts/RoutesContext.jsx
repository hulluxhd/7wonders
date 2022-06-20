import { createContext, useState, useMemo } from 'react';

export const RouteContext = createContext();

function RoutesProvider({ children }) {
  const [categoryID, setCategoryID] = useState(null);

  return (
    <RouteContext.Provider
      value={useMemo(
        () => ({
          categoryID,
          setCategoryID,
        }),
        [categoryID, setCategoryID]
      )}
    >
      {children}
    </RouteContext.Provider>
  );
}

export default RoutesProvider;
