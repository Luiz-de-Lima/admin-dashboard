import type { User } from "../../types";
interface userProp {
  userTable: User[];
}

const Table = ({ userTable }: userProp) => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Nome
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Email
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Role
              </th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-200 bg-white">
            {userTable.map((usuario) => (
              <tr
                key={usuario.id}
                className="transition-colors hover:bg-slate-50"
              >
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-slate-900">
                  {usuario.name}
                </td>

                <td className="whitespace-nowrap px-6 py-4 text-sm text-slate-500">
                  {usuario.email}
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <span className="inline-flex rounded-md bg-indigo-50 px-2.5 py-1 text-xs font-medium text-indigo-700">
                    {usuario.role}
                  </span>
                </td>

                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${
                      usuario.status === "Ativo"
                        ? "bg-emerald-50 text-emerald-700 ring-emerald-600/20"
                        : usuario.status === "Pendente"
                          ? "bg-amber-50 text-amber-700 ring-amber-600/20"
                          : "bg-red-50 text-red-700 ring-red-600/20"
                    }`}
                  >
                    <span
                      className={`mr-1.5 size-1.5 rounded-full ${
                        usuario.status === "active"
                          ? "bg-emerald-500"
                          : usuario.status === "Pendente"
                            ? "bg-amber-500"
                            : "bg-red-500"
                      }`}
                    />

                    {usuario.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
