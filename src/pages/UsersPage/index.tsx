import { useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import Table from "../../components/Table";
import Filters from "../../components/Filters";
import type { UserFilters } from "../../types";

const UsersPage = () => {
  const [filters, setFilters] = useState<UserFilters>({
    search: "",
    status: "",
    role: "",
  });
  const { filteredUsers, load, erro } = useUsers(filters);
  const handleFilters = (newFilters: UserFilters) => {
    setFilters(newFilters);
  };

  if (load) return <p>Carregando</p>;
  if (erro) return <p>Erro ao carregar usuários</p>;
  return (
    <div>
      <Filters onFiltersChange={handleFilters} currentFilters={filters} />
      <Table userTable={filteredUsers} />
    </div>
  );
};

export default UsersPage;
