import React, { useEffect, useState } from 'react';
import app from './base';

export const AuthenticationContext = React.createContext();

export const AuthenticationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    app.auth().onAuthStateChanged(user);
  }, []);

  return (
    <AuthenticationContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
