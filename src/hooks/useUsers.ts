import { useState, useEffect } from "react";
import {
  deleteUser as deleteUserService,
  filterUsers,
} from "../services/useServices";
import type { PaginationState, User, UserFilters } from "../types";

const useUsers = (resultUser: UserFilters, pagination: PaginationState) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [load, setLoad] = useState(false);
  const [erro, setErro] = useState(false);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [refresh, setRefresh] = useState(0);

  const removeUser = (id: number): boolean => {
    const deleted = deleteUserService(id);
    if (deleted) {
      setRefresh((current) => current + 1);
    }
    return deleted;
  };

  useEffect(() => {
    const loadUser = () => {
      try {
        setLoad(true);
        const resultado = filterUsers(resultUser);
        const totalUser = resultado.length;
        const userPerPage = resultado.slice(
          (pagination.currentPage - 1) * pagination.itemsPerPage,
          pagination.currentPage * pagination.itemsPerPage,
        );
        setTotalItems(totalUser);

        setFilteredUsers(userPerPage);
        setLoad(false);
      } catch {
        setErro(true);
      }
    };

    loadUser();
  }, [resultUser, pagination, refresh]);

  return {
    filteredUsers,
    load,
    erro,
    totalItems,
    removeUser,
  };
};
export { useUsers };
