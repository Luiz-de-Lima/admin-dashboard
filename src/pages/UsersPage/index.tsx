import { useUsers } from "../../hooks/useUsers";

const UsersPage = () => {
  const { filteredUsers, load, erro } = useUsers();

  if (load) return <p>Carregando</p>;
  if (erro) return <p>Erro ao carregar usuários</p>;
  return (
    <div>
      <ul>
        {filteredUsers &&
          filteredUsers.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default UsersPage;
