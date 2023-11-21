import React, { FC } from "react";
import LoginForm from "./Form/LoginForm";

interface LoginStateProps {}
interface LoginDispatchProps {}

type LoginProps = LoginStateProps & LoginDispatchProps;

const Login: FC<LoginProps> = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-32 w-384 p-16">
        <div className="flex justify-center items-center">
          <img className="w-240" src="src/assets/logo.svg" alt="JusCash Logo" />
        </div>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
