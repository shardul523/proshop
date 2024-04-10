import { Outlet, Navigate } from "react-router-dom";

import Loader from "../components/ui/Loader";

import { useProfile } from "../hooks/userHooks";

function AdminRoute() {
  const { user, isLoading } = useProfile();

  if (isLoading) return <Loader />;

  if (user.isAdmin) return <Outlet />;

  return <Navigate to={"/"} />;
}
export default AdminRoute;
