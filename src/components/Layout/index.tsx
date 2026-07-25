import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
interface layoutChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: layoutChildren) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  return (
    <div className="flex h-screen">
      <aside
        className={`fixed inset-y-0 left-0 z-40 h-full w-64 bg-zinc-900 px-4 py-6 transition-transform duration-300 md:static md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-8 px-3">
          <h2 className="text-xl font-bold text-white">Dashboard</h2>
          <p className="mt-1 text-sm text-zinc-400">Painel administrativo</p>
        </div>

        <nav>
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink
                to="/"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-white text-zinc-900"
                      : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/user"
                onClick={() => setIsSidebarOpen(false)}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-white text-zinc-900"
                      : "text-zinc-300 hover:bg-zinc-800 hover:text-white"
                  }`
                }
              >
                Usuários
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
        />
      )}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b px-6">
          <button
            type="button"
            onClick={() => setIsSidebarOpen(true)}
            className="rounded-md p-2 text-zinc-700 hover:bg-zinc-100 md:hidden"
          >
            ☰
          </button>
          <div className="flex items-center gap-4">
            {user && <span className="text-sm font-medium">{user.name}</span>}

            <button
              className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white"
              onClick={logout}
            >
              Sair
            </button>
          </div>
        </header>

        <main className="flex-1 min-w-0 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
