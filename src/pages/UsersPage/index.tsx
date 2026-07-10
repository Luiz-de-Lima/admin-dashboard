import { useUsers } from "../../hooks/useUsers";
import Table from "../../components/Table";
const UsersPage = () => {
  const { filteredUsers, load, erro } = useUsers();

  if (load) return <p>Carregando</p>;
  if (erro) return <p>Erro ao carregar usuários</p>;
  return (
    <div>
      <Table userTable={filteredUsers} />
    </div>
  );
};

export default UsersPage;
