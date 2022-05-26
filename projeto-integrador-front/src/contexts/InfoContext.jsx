import { createContext, useState } from 'react';

export const InfoContext = createContext();

function InfoProvider({ children }) {
  const [username, setUsername] = useState('');
  return (
    <InfoContext.Provider value={{ username, setUsername }}>
      {children}
    </InfoContext.Provider>
  );
}

export default InfoProvider;
