import { useState, useEffect } from "react";
import { getUsers } from "../services/useServices";
import type { User } from "../types";

const useUsers = () => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [load, setLoad] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const loadUser = () => {
      try {
        setLoad(true);
        const resultado = getUsers();
        setFilteredUsers(resultado);
        setLoad(false);
      } catch {
        setErro(true);
      }
    };
    loadUser();
  }, []);

  return {
    filteredUsers,
    load,
    erro,
  };
};
export { useUsers };
