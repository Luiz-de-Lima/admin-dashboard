import { useState, useEffect } from "react";
import { filterUsers } from "../services/useServices";
import type { User, UserFilters } from "../types";

const useUsers = (resultUser: UserFilters) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [load, setLoad] = useState(false);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    const loadUser = () => {
      try {
        setLoad(true);
        const resultado = filterUsers(resultUser);
        setFilteredUsers(resultado);
        setLoad(false);
      } catch {
        setErro(true);
      }
    };
    loadUser();
  }, [resultUser]);

  return {
    filteredUsers,
    load,
    erro,
  };
};
export { useUsers };
