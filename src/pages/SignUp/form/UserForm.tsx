import React, { FC } from "react";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import { Eye, EyeOff } from "lucide-react";
import { useShowPassword } from "../../../hooks/useShowPassword";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userFormDto } from "./UserFormDto";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

interface UserFormStateProps {}
interface UserFormDispatchProps {}

type UserFormProps = UserFormStateProps & UserFormDispatchProps;

const UserForm: FC<UserFormProps> = () => {
  const [showPassword, handleClickShowPassword] = useShowPassword(false);
  const [showConfirmPassword, handleClickShowConfirmPassword] =
    useShowPassword(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userFormDto),
    criteriaMode: "all",
    mode: "all",
    defaultValues,
  });

  const onSubmit = handleSubmit(() => {});

  return (
    <form onSubmit={onSubmit} className="flex flex-col justify-start gap-16">
      <div className="flex flex-col gap-4">
        <label className="text-primary">Seu Nome completo: *</label>
        <Input
          {...register("name")}
          className="w-full"
          type="text"
          error={!!errors.name}
          helperText={errors?.name?.message}
        />
      </div>
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
      <div className="flex flex-col gap-4">
        <label className="text-primary">Confirme sua senha: *</label>
        <Input
          {...register("confirmPassword")}
          className="w-full"
          type={showConfirmPassword ? "text" : "password"}
          error={!!errors.confirmPassword}
          helperText={errors?.confirmPassword?.message}
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
          <a href="/src/pages" className="text-primary text-sm">
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
