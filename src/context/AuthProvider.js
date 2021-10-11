import React, { createContext } from 'react';
import useFirebase from '../hooks/firebase';

export const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  //   const { children } = props;
  const allprovider = useFirebase();
  return (
    <Authcontext.Provider value={allprovider}>{children}</Authcontext.Provider>
  );
};

export default AuthProvider;
