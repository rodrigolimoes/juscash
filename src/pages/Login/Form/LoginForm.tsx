import { FC } from "react";
import { useShowPassword } from "../../../hooks/useShowPassword";
import Input from "../../../components/Input";
import { Eye, EyeOff } from "lucide-react";
import Button from "../../../components/Button";
import { useAuth } from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormDto } from "./LoginFormDto";
import {Link, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";

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
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }: any) => {
    try {
      await login({ email, password });
      navigate("/");
    } catch (e) {
      const { message } = e as Error;
      toast.error(message);
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
          placeholder={"Ex: rodrigo@gmail.com"}
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
          placeholder={"Ex: ********"}
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
          <Link to="/signup" className="text-primary text-sm">
            Cadastrar
          </Link>
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
