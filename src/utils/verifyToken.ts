import { JwtPayload, jwtDecode } from "jwt-decode";

export interface ExtendedJwtPayload extends JwtPayload {
  role: "user" | "admin";
}

export const verifyToken = (token: string): ExtendedJwtPayload | null => {
  try {
    return jwtDecode<ExtendedJwtPayload>(token);
  } catch (error) {
    console.log(error);
    return null;
  }
};
