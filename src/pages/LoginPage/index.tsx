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
    <>
      <form action="" onSubmit={submitData}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={loginUser.email}
          onChange={dataForm}
        />
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          value={loginUser.password}
          onChange={dataForm}
        />
        <button>Enviar</button>
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
    </>
  );
};

export default LoginPage;
