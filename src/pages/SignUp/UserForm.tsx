import React, { FC } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Eye } from "lucide-react";

interface UserFormStateProps {}
interface UserFormDispatchProps {}

type UserFormProps = UserFormStateProps & UserFormDispatchProps;

const UserForm: FC<UserFormProps> = () => {
  return (
    <form className="flex flex-col justify-start gap-16">
      <div className="flex flex-col gap-4">
        <span className="text-primary">Seu Nome completo: *</span>
        <Input className="w-full" type="text" />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-primary">E-mail: *</span>
        <Input className="w-full" type="email" />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-primary">Senha: *</span>
        <Input className="w-full" type="password" endAdornment={<Eye />} />
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-primary">Confirme sua senha: *</span>
        <Input className="w-full" type="password" endAdornment={<Eye />} />
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
