import { AuthContext } from "../context/AuthContext";

import { useContext } from "react";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("erro de autenticação");
  }
  return context;
};

export { useAuth };
