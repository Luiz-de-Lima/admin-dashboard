export type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  status: "active" | "inactive";
  createdAt: string;
};

export type UserFilters = {
  search: string;
  role: "admin" | "user" | "";
  status: "" | "active" | "inactive";
};

export type PaginationState = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
};
