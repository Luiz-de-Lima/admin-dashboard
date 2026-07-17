import { useState, useEffect } from "react";
import { filterUsers } from "../services/useServices";
import type { PaginationState, User, UserFilters } from "../types";

const useUsers = (resultUser: UserFilters, pagination: PaginationState) => {
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [load, setLoad] = useState(false);
  const [erro, setErro] = useState(false);
  const [totalItems, setTotalItems] = useState<number>(0);

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
  }, [resultUser, pagination]);

  return {
    filteredUsers,
    load,
    erro,
    totalItems,
  };
};
export { useUsers };
