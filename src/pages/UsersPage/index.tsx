import { useEffect, useState } from "react";
import { useUsers } from "../../hooks/useUsers";
import Table from "../../components/Table";
import Filters from "../../components/Filters";
import Pagination from "../../components/Pagination";

import type { PaginationState, UserFilters } from "../../types";
import Modal from "../../components/Modal";

const UsersPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
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
  const handleCloseModal = () => {
    setModalIsOpen(false);
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
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        <p>conteudo modal</p>
      </Modal>
      <button
        onClick={() => setModalIsOpen(true)}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
      >
        Abrir modal
      </button>
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
