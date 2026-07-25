import { useAuth } from "../../hooks/useAuth";
import { getUsers } from "../../services/useServices";

interface DashboardMetrics {
  totalUsers: number;
  activeUsers: number;
  inactiveUsers: number;
  adminUsers: number;
}

const DashboardPage = () => {
  const { user } = useAuth();
  const users = getUsers();
  const metrics: DashboardMetrics = {
    totalUsers: users.length,
    activeUsers: users.filter((user) => user.status === "active").length,
    inactiveUsers: users.filter((user) => user.status === "inactive").length,
    adminUsers: users.filter((user) => user.role === "admin").length,
  };

  return (
    <div>
      {user && <p>Olá {user.name}</p>}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-zinc-500">Usuários</p>

          <div className="mt-4 flex items-end justify-between">
            <h3 className="text-3xl font-bold text-zinc-900">
              {metrics.totalUsers}
            </h3>
            <span className="text-sm font-medium text-green-600">+12%</span>
          </div>

          <p className="mt-2 text-sm text-zinc-400">
            Total de usuários cadastrados
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-zinc-500">Ativos</p>

          <div className="mt-4 flex items-end justify-between">
            <h3 className="text-3xl font-bold text-zinc-900">
              {metrics.activeUsers}
            </h3>
            <span className="text-sm font-medium text-green-600">+8%</span>
          </div>

          <p className="mt-2 text-sm text-zinc-400">
            Usuários ativos no sistema
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-zinc-500">Inativos</p>

          <div className="mt-4 flex items-end justify-between">
            <h3 className="text-3xl font-bold text-zinc-900">
              {metrics.inactiveUsers}
            </h3>
            <span className="text-sm font-medium text-red-600">-3%</span>
          </div>

          <p className="mt-2 text-sm text-zinc-400">
            Contas sem atividade recente
          </p>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
          <p className="text-sm font-medium text-zinc-500">Admins</p>

          <div className="mt-4 flex items-end justify-between">
            <h3 className="text-3xl font-bold text-zinc-900">
              {metrics.adminUsers}
            </h3>
            <span className="text-sm font-medium text-green-600">+2</span>
          </div>

          <p className="mt-2 text-sm text-zinc-400">
            Usuários com permissão admin
          </p>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
