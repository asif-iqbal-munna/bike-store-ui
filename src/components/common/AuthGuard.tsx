import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  logout,
  useCurrentToken,
} from "../../pages/auth/_libs/redux/authSlice";
import { verifyToken } from "../../utils/verifyToken";

interface AuthGuardProps {
  children: ReactNode;
  role: "customer" | "admin";
}

const AuthGuard = ({ children, role }: AuthGuardProps) => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();

  if (role !== undefined && role !== user?.role) {
    dispatch(logout());
    return <Navigate to="/auth/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/auth/login" replace={true} />;
  }

  return children;
};

export default AuthGuard;
