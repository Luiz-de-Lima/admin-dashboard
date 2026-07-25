import type { UserFilters } from "../../types";

interface filterProps {
  currentFilters: UserFilters;
  onFiltersChange: (currentFilters: UserFilters) => void;
}
const Filters = ({ currentFilters, onFiltersChange }: filterProps) => {
  return (
    <div className="mb-6 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm mt-2">
      <div className="grid gap-4 md:grid-cols-4">
        <div className="flex flex-col gap-2 md:col-span-2">
          <label htmlFor="busca" className="text-sm font-medium text-zinc-700">
            Busca
          </label>

          <input
            type="search"
            name="search"
            id="busca"
            onChange={(e) =>
              onFiltersChange({ ...currentFilters, search: e.target.value })
            }
            value={currentFilters.search}
            className="h-10 w-full rounded-md border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900"
          />
        </div>

        <div className="flex flex-col gap-2">
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
            className="h-10 w-full rounded-md border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900"
          >
            <option value="">Todos</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="status" className="text-sm font-medium text-zinc-700">
            Status
          </label>

          <select
            name="status"
            id="status"
            value={currentFilters.status}
            onChange={(e) =>
              onFiltersChange({
                ...currentFilters,
                status: e.target.value as UserFilters["status"],
              })
            }
            className="h-10 w-full rounded-md border border-zinc-300 px-3 text-sm outline-none focus:border-zinc-900"
          >
            <option value="">Todos</option>
            <option value="active">Ativo</option>
            <option value="inactive">Inativo</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;
