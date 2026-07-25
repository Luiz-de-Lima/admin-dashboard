import { useEffect, useState } from "react";
import Table from "../../components/Table";
import Filters from "../../components/Filters";
import Pagination from "../../components/Pagination";
import Modal from "../../components/Modal";
import UserForm from "../../components/UserForm";
import { useUsers } from "../../hooks/useUsers";
import type { PaginationState, User, UserFilters } from "../../types";

type FormErrors = Partial<Record<"name" | "email" | "role" | "status", string>>;

const UsersPage = () => {
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
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
  const { filteredUsers, load, erro, totalItems, removeUser } = useUsers(
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
    setFormErrors({});
  };

  const handleSubmitForm = (data: Omit<User, "id" | "createdAt">) => {
    const errors: FormErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.name.trim()) {
      errors.name = "O nome é obrigatório";
    }

    if (!data.email.trim()) {
      errors.email = "O email é obrigatório";
    } else if (!emailRegex.test(data.email)) {
      errors.email = "Digite um email válido";
    }

    if (!data.role) {
      errors.role = "Selecione uma role";
    }

    if (!data.status) {
      errors.status = "Selecione um status";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setModalIsOpen(false);
  };
  const handleOpenDeleteModal = (user: User) => {
    setUserToDelete(user);
  };
  const handleCloseDeleteModal = () => {
    setUserToDelete(null);
  };

  const handleConfirmDelete = () => {
    if (!userToDelete) return;
    const deleted = removeUser(userToDelete.id);
    if (!deleted) {
      return;
    }
    setUserToDelete(null);
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
        <UserForm
          userForm={null}
          submitForm={handleSubmitForm}
          errors={formErrors}
        />
      </Modal>
      <Modal isOpen={userToDelete !== null} onClose={handleCloseDeleteModal}>
        <div className="w-full max-w-md rounded-xl bg-white p-6">
          <h2 className="text-lg font-semibold text-slate-900">
            Excluir usuário
          </h2>

          <p className="mt-3 text-sm text-slate-600">
            Tem certeza de que deseja excluir{" "}
            <strong className="text-slate-900">{userToDelete?.name}</strong>?
          </p>

          <p className="mt-2 text-sm text-red-600">
            Esta ação não poderá ser desfeita.
          </p>

          <div className="mt-6 flex justify-end gap-3">
            <button
              type="button"
              onClick={handleCloseDeleteModal}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Cancelar
            </button>

            <button
              type="button"
              onClick={handleConfirmDelete}
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
            >
              Confirmar exclusão
            </button>
          </div>
        </div>
      </Modal>
      <button
        onClick={() => setModalIsOpen(true)}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
      >
        Novo usuário
      </button>
      <Filters onFiltersChange={handleFilters} currentFilters={filters} />
      <Table userTable={filteredUsers} onDeleteUser={handleOpenDeleteModal} />
      <Pagination
        pagination={allPagination}
        changePagination={handleChangePagination}
      />
    </div>
  );
};

export default UsersPage;
