import React, { FC } from "react";
import Input from "../../components/Input/Input";
import { Eye } from "lucide-react";

interface SignUpStateProps {}
interface SignUpDispatchProps {}

type SignUpProps = SignUpStateProps & SignUpDispatchProps;

const SignUp: FC<SignUpProps> = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      {/*TODO: Remove inline style*/}
      <div
        className="flex flex-col gap-32"
        style={{
          width: "350px",
          padding: "16px",
        }}
      >
        <img className="w-full" src="src/assets/logo.svg" alt="JusCash Logo" />
        <form className="flex flex-col gap-16">
          <div>
            <span className="text-primary">Seu Nome completo: *</span>
            <Input className="w-full" type="text" />
          </div>
          <div>
            <span className="text-primary">E-mail: *</span>
            <Input className="w-full" type="email" />
          </div>
          <div>
            <span className="text-primary">Senha: *</span>
            <Input className="w-full" type="password" endAdornment={<Eye />} />
          </div>
          <div>
            <span className="text-primary">Confirme sua senha: *</span>
            <Input className="w-full" type="password" endAdornment={<Eye />} />
          </div>
          <div>
            <span className="float-right">Já possui conta? Fazer o Login</span>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignUp;
