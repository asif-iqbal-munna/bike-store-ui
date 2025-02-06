import AppForm from "../../../../components/blocks/formFields/form/AppForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import AppInput from "../../../../components/blocks/formFields/AppInput";
import { z } from "zod";
import { toast } from "sonner";
import { useLoginMutation } from "../api/loginApi";
import { TResponse } from "../../../../types";

const loginSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const LoginForm = () => {
  const [handleLogin, { isLoading }] = useLoginMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("logging in...");

    const payload = {
      email: values.email,
      password: values.password,
    };

    try {
      const res = (await handleLogin(payload)) as TResponse<null>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Successfully logged in", { id: toastId });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <AppForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
      <AppInput type="email" name="email" label="Email" />
      <AppInput type="password" name="password" label="Password" />

      <div style={{ display: "flex", justifyContent: "end" }}>
        <Button loading={isLoading} htmlType="submit" type="primary">
          Submit
        </Button>
      </div>
    </AppForm>
  );
};

export default LoginForm;
