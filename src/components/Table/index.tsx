import type { User } from "../../types";
interface userProp {
  userTable: User[];
}

const Table = ({ userTable }: userProp) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {userTable.map((usuario) => (
          <tr key={usuario.id}>
            <td>{usuario.name}</td>
            <td>{usuario.email}</td>
            <td>{usuario.role}</td>
            <td>{usuario.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
