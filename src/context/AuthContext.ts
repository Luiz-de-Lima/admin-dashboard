import { createContext } from "react";
import type { User } from "../types";

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
};
export const AuthContext = createContext<AuthContextType | null>(null);
