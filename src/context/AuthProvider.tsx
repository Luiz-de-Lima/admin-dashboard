import { useEffect, useState } from "react";
import { getUsers } from "../services/useServices";
import { AuthContext } from "./AuthContext";
import type { User } from "../types";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = user !== null;

  const login = (email: string, password: string) => {
    const allUsers = getUsers();
    const userFound = allUsers.find((u) => u.email === email);
    if (userFound) {
      setUser(userFound);

      localStorage.setItem("user", JSON.stringify(userFound));
      return true;
    } else return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const userLogged = localStorage.getItem("user");
    if (userLogged !== null) {
      setUser(JSON.parse(userLogged));
    }
  }, []);
  return (
    <AuthContext.Provider value={{ login, user, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
