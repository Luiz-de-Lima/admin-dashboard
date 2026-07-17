import { useEffect, useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import Table from "../../components/Table";
import Filters from "../../components/Filters";
import Pagination from "../../components/Pagination";

import type { PaginationState, UserFilters } from "../../types";

const UsersPage = () => {
  const [allPagination, setAllPagination] = useState<PaginationState>({
    currentPage: 1,
    itemsPerPage: 5,
    totalItems: 0,
  });
  const [filters, setFilters] = useState<UserFilters>({
    search: "",
    status: "",
    role: "",
  });
  const { filteredUsers, load, erro, totalItems } = useUsers(
    filters,
    allPagination,
  );

  const handleFilters = (newFilters: UserFilters) => {
    setFilters(newFilters);
  };
  const handleChangePagination = (newPage: number) => {
    setAllPagination({
      ...allPagination,
      currentPage: newPage,
    });
  };

  useEffect(() => {
    setAllPagination({
      ...allPagination,
      totalItems,
    });
  }, [totalItems]);
  if (load) return <p>Carregando</p>;
  if (erro) return <p>Erro ao carregar usuários</p>;
  return (
    <div>
      <Filters onFiltersChange={handleFilters} currentFilters={filters} />
      <Table userTable={filteredUsers} />
      <Pagination
        pagination={allPagination}
        changePagination={handleChangePagination}
      />
    </div>
  );
};

export default UsersPage;
