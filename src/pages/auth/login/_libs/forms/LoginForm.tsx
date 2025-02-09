import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import { z } from "zod";
import { toast } from "sonner";
import { useLoginMutation } from "../../../_libs/api/loginApi";
import { TResponse } from "../../../../../types";
import AppForm from "../../../../../components/blocks/formFields/form/AppForm";
import AppInput from "../../../../../components/blocks/formFields/AppInput";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../../../../../utils/verifyToken";
import { setUser, TUser } from "../../../_libs/redux/authSlice";
import { useAppDispatch } from "../../../../../redux/hooks";

const loginSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  const [handleLogin, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("logging in...");

    const payload = {
      email: values.email,
      password: values.password,
    };

    try {
      const res = (await handleLogin(payload).unwrap()) as TResponse<{
        token: string;
      }>;

      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        if (res.data) {
          const user = verifyToken(res.data.token) as TUser;
          dispatch(setUser({ user: user, token: res.data.token }));
          navigate("/");
        }
        toast.success("Successfully logged in", { id: toastId });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <div>
      <AppForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
        <AppInput type="email" name="email" label="Email" />
        <AppInput type="password" name="password" label="Password" />

        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button loading={isLoading} htmlType="submit" type="primary">
            Login
          </Button>
        </div>
      </AppForm>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Don&apos;t have an account? </p>
        <Button
          size="small"
          style={{ color: "blue" }}
          type="text"
          onClick={() => navigate("/auth/register")}
        >
          Please Register
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
