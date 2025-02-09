import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "antd";
import { z } from "zod";
import { toast } from "sonner";
import AppForm from "../../../../../components/blocks/formFields/form/AppForm";
import AppInput from "../../../../../components/blocks/formFields/AppInput";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../../_libs/api/loginApi";
import { TResponse } from "../../../../../types";

const loginSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email().min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [handleRegister, { isLoading }] = useRegisterMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const toastId = toast.loading("logging in...");

    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    try {
      const res = (await handleRegister(payload)) as TResponse<null>;
      if (res.error) {
        toast.error(res.error.data.message, { id: toastId });
      } else {
        toast.success("Successfully registered, please login", { id: toastId });
        navigate("/auth/login");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      console.log(err);

      toast.error("Something went wrong", { id: toastId });
    }
  };
  return (
    <div>
      <AppForm onSubmit={onSubmit} resolver={zodResolver(loginSchema)}>
        <AppInput type="test" name="name" label="Full Name" />
        <AppInput type="email" name="email" label="Email" />
        <AppInput type="password" name="password" label="Password" />

        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button loading={isLoading} htmlType="submit" type="primary">
            Register
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
        <p>Already have an account? </p>
        <Button
          size="small"
          style={{ color: "blue" }}
          type="text"
          onClick={() => navigate("/auth/login")}
        >
          Please Login
        </Button>
      </div>
    </div>
  );
};

export default RegistrationForm;
