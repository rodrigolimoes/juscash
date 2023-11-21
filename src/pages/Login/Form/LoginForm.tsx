import React, { FC } from "react";
import { useShowPassword } from "../../../hooks/useShowPassword";
import Input from "../../../components/Input";
import { Eye, EyeOff } from "lucide-react";
import Button from "../../../components/Button";

interface LoginFormStateProps {}
interface LoginFormDispatchProps {}

type LoginFormProps = LoginFormStateProps & LoginFormDispatchProps;

const LoginForm: FC<LoginFormProps> = () => {
  const [showPassword, handleClickShowPassword] = useShowPassword(false);

  return (
    <form className="flex flex-col justify-start gap-16">
      <div className="flex flex-col gap-4">
        <label className="text-primary">E-mail: *</label>
        <Input className="w-full" type="text" />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-primary">Senha: *</label>
        <Input
          className="w-full"
          type={showPassword ? "text" : "password"}
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
