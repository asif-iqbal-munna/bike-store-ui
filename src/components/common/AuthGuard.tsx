import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const user = true;
  const token = true;

  if (!user || !token) return <Navigate to="/login" replace={true} />;
  return children;
};

export default AuthGuard;
