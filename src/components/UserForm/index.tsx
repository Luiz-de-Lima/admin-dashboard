import { useState } from "react";
import type { User } from "../../types";

interface userFormPros {
  userForm: User | null;
  submitForm: (data: Omit<User, "id" | "createdAt">) => void;
  errors: Partial<Record<"name" | "email" | "role" | "status", string>>;
}

const UserForm = ({ userForm, submitForm, errors }: userFormPros) => {
  const [userFormState, setUserFormState] = useState<
    Omit<User, "id" | "createdAt">
  >(
    userForm !== null
      ? {
          name: userForm.name,
          email: userForm.email,
          role: userForm.role,
          status: userForm.status,
        }
      : {
          name: "",
          email: "",
          role: "user" as User["role"],
          status: "active" as User["status"],
        },
  );
  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitForm(userFormState);
  };
  return (
    <form
      className="max-w-md space-y-5 rounded-xl bg-white p-6 shadow-md"
      onSubmit={handleSubmitForm}
    >
      {/* Nome */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Nome
        </label>
        <input
          type="text"
          name="nome"
          placeholder="Digite o nome"
          className="
        w-full rounded-lg border border-gray-300 
        px-4 py-2 text-sm
        outline-none
        focus:border-blue-500
        focus:ring-2 focus:ring-blue-200
      "
          value={userFormState.name}
          onChange={(e) =>
            setUserFormState({ ...userFormState, name: e.target.value })
          }
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Digite o email"
          className="
        w-full rounded-lg border border-gray-300 
        px-4 py-2 text-sm
        outline-none
        focus:border-blue-500
        focus:ring-2 focus:ring-blue-200
      "
          onChange={(e) =>
            setUserFormState({ ...userFormState, email: e.target.value })
          }
          value={userFormState.email}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Role
        </label>
        <select
          name="role"
          className="
        w-full rounded-lg border border-gray-300 
        px-4 py-2 text-sm
        outline-none
        focus:border-blue-500
        focus:ring-2 focus:ring-blue-200
      "
          onChange={(e) =>
            setUserFormState({
              ...userFormState,
              role: e.target.value as User["role"],
            })
          }
          value={userFormState.role}
        >
          <option value="">Selecione uma role</option>

          <option value="admin">Admin</option>

          <option value="user">User</option>
        </select>
        {errors.role && (
          <p className="mt-1 text-sm text-red-600">{errors.role}</p>
        )}
      </div>

      {/* Status */}
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Status
        </label>

        <select
          name="status"
          className="
        w-full rounded-lg border border-gray-300 
        px-4 py-2 text-sm
        outline-none
        focus:border-blue-500
        focus:ring-2 focus:ring-blue-200
      "
          value={userFormState.status}
          onChange={(e) =>
            setUserFormState({
              ...userFormState,
              status: e.target.value as User["status"],
            })
          }
        >
          <option value="">Selecione o status</option>

          <option value="active">Ativo</option>

          <option value="inactive">Inativo</option>
        </select>
        {errors.status && (
          <p className="mt-1 text-sm text-red-600">{errors.status}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-4 py-2 text-white cursor-pointer"
      >
        Salvar
      </button>
    </form>
  );
};

export default UserForm;
