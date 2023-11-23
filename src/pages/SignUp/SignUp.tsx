import { FC } from "react";
import UserForm from "./Form/UserForm";
import Logo from "/img/logo.svg";

interface SignUpStateProps {}
interface SignUpDispatchProps {}

type SignUpProps = SignUpStateProps & SignUpDispatchProps;

const SignUp: FC<SignUpProps> = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-32 w-384 p-16">
        <div className="flex justify-center items-center">
          <img className="w-240" src={Logo} alt="JusCash Logo" />
        </div>
        <UserForm />
      </div>
    </main>
  );
};

export default SignUp;
