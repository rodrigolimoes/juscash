import React, { FC } from "react";
import UserForm from "./form/UserForm";

interface SignUpStateProps {}
interface SignUpDispatchProps {}

type SignUpProps = SignUpStateProps & SignUpDispatchProps;

const SignUp: FC<SignUpProps> = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-32 w-384 p-16">
        <div className="flex justify-center items-center">
          <img className="w-240" src="src/assets/logo.svg" alt="JusCash Logo" />
        </div>
        <UserForm />
      </div>
    </main>
  );
};

export default SignUp;
