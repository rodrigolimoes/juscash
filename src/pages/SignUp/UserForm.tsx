import React, { FC } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Eye, EyeOff } from "lucide-react";
import { useShowPassword } from "../../hooks/useShowPassword";

interface UserFormStateProps {}
interface UserFormDispatchProps {}

type UserFormProps = UserFormStateProps & UserFormDispatchProps;

const UserForm: FC<UserFormProps> = () => {
  const [showPassword, handleClickShowPassword] = useShowPassword(false);
  const [showConfirmPassword, handleClickShowConfirmPassword] =
    useShowPassword(false);

  return (
    <form className="flex flex-col justify-start gap-16">
      <div className="flex flex-col gap-4">
        <label className="text-primary">Seu Nome completo: *</label>
        <Input className="w-full" type="text" />
      </div>
      <div className="flex flex-col gap-4">
        <label className="text-primary">E-mail: *</label>
        <Input className="w-full" type="email" />
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
      <div className="flex flex-col gap-4">
        <label className="text-primary">Confirme sua senha: *</label>
        <Input
          className="w-full"
          type={showConfirmPassword ? "text" : "password"}
          endAdornment={
            <div
              className="cursor-pointer text-secondary"
              onClick={handleClickShowConfirmPassword}
            >
              {showConfirmPassword ? <EyeOff /> : <Eye />}
            </div>
          }
        />
      </div>
      <div>
        <span className="float-right text-sm">
          Já possui conta?{" "}
          <a href="/" className="text-primary text-sm">
            Fazer o Login
          </a>
        </span>
      </div>
      <div className="flex justify-center m-t-12">
        <Button type="submit" variant="contained" color="success">
          Criar conta
        </Button>
      </div>
    </form>
  );
};

export default UserForm;
