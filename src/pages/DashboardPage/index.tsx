import { useAuth } from "../../hooks/useAuth";

const DashboardPage = () => {
  const { user } = useAuth();
  return <div>{user && <p>Olá {user.name}</p>}</div>;
};

export default DashboardPage;
