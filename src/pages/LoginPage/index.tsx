import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

interface LoginForm {
  email: string;
  password: string;
}
const LoginPage = () => {
  const [loginUser, setLoginUser] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const [erro, setErro] = useState(false);

  const dataForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginUser((loginUser) => ({
      ...loginUser,
      [name]: value,
    }));
  };

  const submitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!login(loginUser.email, loginUser.password)) {
      return setErro(true);
    }
    return setErro(false);
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-6">
      <form
        action=""
        onSubmit={submitData}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
      >
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-zinc-900">
            Entrar no Dashboard
          </h1>

          <p className="mt-2 text-sm text-zinc-500">
            Faça login para acessar o painel administrativo.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-zinc-700"
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              id="email"
              value={loginUser.email}
              onChange={dataForm}
              placeholder="Digite seu email"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-zinc-700"
            >
              Senha
            </label>

            <input
              type="password"
              name="password"
              id="password"
              value={loginUser.password}
              onChange={dataForm}
              placeholder="Digite sua senha"
              className="w-full rounded-lg border border-zinc-300 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-zinc-900 focus:ring-2 focus:ring-zinc-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-zinc-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            Entrar
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-zinc-500">
          Você será redirecionado para o dashboard após o login.
        </p>
      </form>
      {erro && (
        <div
          className="flex p-4 mb-4 text-sm text-red-800 rounded bg-red-50 border border-red-200"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-full h-full me-3 mt-[2px]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 3 0v5a1.5 1.5 0 0 1-3 0V4Zm1.5 11.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
          </svg>

          <div>
            <span className="font-bold">Erro!</span> Algo correu mal. Por favor,
            verifica os dados introduzidos e tenta novamente.
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
