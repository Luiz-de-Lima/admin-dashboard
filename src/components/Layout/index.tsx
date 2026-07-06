import React from "react";
import { useAuth } from "../../hooks/useAuth";
interface layoutChildren {
  children: React.ReactNode;
}

const Layout = ({ children }: layoutChildren) => {
  const { user, logout } = useAuth();
  return (
    <div className="flex h-screen">
      <aside className="h-full w-64 bg-zinc-900">sidebar</aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b px-6">
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

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
