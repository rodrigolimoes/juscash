import React, { FC } from "react";
import { useShowPassword } from "../../../hooks/useShowPassword";
import Input from "../../../components/Input";
import { Eye, EyeOff } from "lucide-react";
import Button from "../../../components/Button";
import { useAuth } from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormDto } from "./LoginFormDto";

const defaultValues = {
  email: "",
  password: "",
};

interface LoginFormStateProps {}
interface LoginFormDispatchProps {}

type LoginFormProps = LoginFormStateProps & LoginFormDispatchProps;

const LoginForm: FC<LoginFormProps> = () => {
  const [showPassword, handleClickShowPassword] = useShowPassword(false);
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormDto),
    criteriaMode: "all",
    mode: "all",
    defaultValues,
  });

  const onSubmit = ({ email, password }: any) => {
    try {
      login({ email, password });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-start gap-16"
    >
      <div className="flex flex-col gap-4">
        <label className="text-primary">E-mail: *</label>
        <Input
          {...register("email")}
          className="w-full"
          type="email"
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-primary">Senha: *</label>
        <Input
          {...register("password")}
          className="w-full"
          type={showPassword ? "text" : "password"}
          error={!!errors.password}
          helperText={errors?.password?.message}
          endAdornment={
            <div
              className="cursor-pointer text-secondary"
              onClick={handleClickShowPassword}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </div>
          }
        />
      </div>
      <div>
        <span className="float-right text-sm">
          Não possui uma conta?{" "}
          <a href="/" className="text-primary text-sm">
            Cadastrar
          </a>
        </span>
      </div>
      <div className="flex justify-center m-t-12">
        <Button type="submit" variant="contained" color="info">
          Entrar
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
