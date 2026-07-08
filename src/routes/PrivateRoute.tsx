import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth();
  if (isLoading) return <p>carregando</p>;

  if (!isLoading && isAuthenticated) {
    return <Outlet />;
  } else if (!isLoading && !isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
};

export default PrivateRoute;
