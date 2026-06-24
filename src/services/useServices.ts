import type { User, UserFilters } from "../types";

const users: User[] = [
  {
    id: 1,
    name: "Jessica",
    email: "Jessica@email.com",
    status: "active",
    role: "user",
    createdAt: "12/06/2026",
  },
  {
    id: 2,
    name: "Lucas Silva",
    email: "lucas.silva@email.com",
    status: "active",
    role: "admin",
    createdAt: "10/06/2026",
  },
  {
    id: 3,
    name: "Amanda Costa",
    email: "amanda.costa@email.com",
    status: "inactive",
    role: "user",
    createdAt: "08/06/2026",
  },
  {
    id: 4,
    name: "Bruno Rodrigues",
    email: "bruno.r@email.com",
    status: "active",
    role: "user",
    createdAt: "05/06/2026",
  },
  {
    id: 5,
    name: "Camila Oliveira",
    email: "camila.o@email.com",
    status: "inactive",
    role: "admin",
    createdAt: "01/06/2026",
  },
  {
    id: 6,
    name: "Diego Almeida",
    email: "diego.almeida@email.com",
    status: "active",
    role: "user",
    createdAt: "28/05/2026",
  },
  {
    id: 7,
    name: "Fernanda Lima",
    email: "fernanda.lima@email.com",
    status: "active",
    role: "admin",
    createdAt: "20/05/2026",
  },
  {
    id: 8,
    name: "Gabriel Santos",
    email: "gabriel.santos@email.com",
    status: "inactive",
    role: "user",
    createdAt: "15/05/2026",
  },
];

const getUsers = () => {
  return users;
};
const getUserById = (id: number) => {
  return users.find((u) => u.id === id);
};

const filterUsers = (filters: UserFilters) => {
  const userFind = users.filter((user) => {
    let resultado = true;
    if (filters.search !== "") {
      if (
        !user.name
          .toLocaleLowerCase()
          .includes(filters.search.toLocaleLowerCase())
      ) {
        resultado = false;
      }
    }
    if (filters.role !== "") {
      if (!user.role.toLowerCase().includes(filters.role.toLowerCase())) {
        resultado = false;
      }
    }
    if (filters.status !== "") {
      if (
        !user.status.toLowerCase().includes(filters.status.toLocaleLowerCase())
      ) {
        resultado = false;
      }
    }

    return resultado;
  });
  return userFind;
};
export { users, getUserById, getUsers, filterUsers };
