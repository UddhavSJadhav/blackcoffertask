import { useContext } from "react";
import AuthContext from "../contexts/AuthProvider";

type AuthContextType = {
  auth: {
    email: string;
  };
  setAuth: React.Dispatch<React.SetStateAction<{ email: string }>>;
};

const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};

export default useAuth;
