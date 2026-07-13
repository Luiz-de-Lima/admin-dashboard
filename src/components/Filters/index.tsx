import type { UserFilters } from "../../types";

interface filterProps {
  currentFilters: UserFilters;
  onFiltersChange: (currentFilters: UserFilters) => void;
}
const Filters = ({ currentFilters, onFiltersChange }: filterProps) => {
  return (
    <div className="flex items-center gap-6 border-b bg-white px-6 py-4">
      <div className="flex items-center gap-2">
        <label htmlFor="busca" className="text-sm font-medium text-zinc-700">
          Busca
        </label>
        <input
          type="search"
          name=""
          id="busca"
          onChange={(e) =>
            onFiltersChange({ ...currentFilters, search: e.target.value })
          }
          value={currentFilters.search}
          className="h-10 w-64 rounded-md border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900"
        />
      </div>
      <div className="flex items-center gap-2">
        <label htmlFor="role" className="text-sm font-medium text-zinc-700">
          Role
        </label>

        <select
          name="role"
          id="role"
          value={currentFilters.role}
          onChange={(e) =>
            onFiltersChange({
              ...currentFilters,
              role: e.target.value as UserFilters["role"],
            })
          }
          className="h-10 w-40 rounded-md border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900"
        >
          <option value="">Todos</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <label htmlFor="status" className="text-sm font-medium text-zinc-700">
          Status
        </label>
        <select
          name="status"
          id=""
          value={currentFilters.status}
          onChange={(e) =>
            onFiltersChange({
              ...currentFilters,
              status: e.target.value as UserFilters["status"],
            })
          }
          className="h-10 w-40 rounded-md border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900"
        >
          <option value="">Todos</option>
          <option value="active">Ativo</option>
          <option value="inactive">Inativo</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
