import { FC } from "react";
import LeadsManagement from "./Leads/LeadsManagement";
import Logo from "/img/logo.svg";

interface HomeStateProps {}
interface HomeDispatchProps {}

type HomeProps = HomeStateProps & HomeDispatchProps;

const Home: FC<HomeProps> = () => {
  return (
    <>
      <header className="w-full h-152 p-16">
        <img className="w-full h-full" src={Logo} alt="JusCash Logo" />
      </header>
      <main className="w-full p-16 h-screen flex flex-col justify-start items-start">
        <LeadsManagement />
      </main>
    </>
  );
};

export default Home;
