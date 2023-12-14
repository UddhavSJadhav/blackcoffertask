import React, { createContext, ReactNode, useState } from "react";

type AuthProviderState = {
  email: string;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext<{
  auth: AuthProviderState;
  setAuth: React.Dispatch<React.SetStateAction<AuthProviderState>>;
}>({
  auth: { email: "" },
  setAuth: () => {},
});

export default AuthContext;

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [auth, setAuth] = useState<AuthProviderState>({ email: "" });

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
