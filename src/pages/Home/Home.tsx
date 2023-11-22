import React, { FC } from "react";
import LeadsManagement from "./Leads/LeadsManagement";

interface HomeStateProps {}
interface HomeDispatchProps {}

type HomeProps = HomeStateProps & HomeDispatchProps;

const Home: FC<HomeProps> = () => {
  return (
    <>
      <header className="w-full h-152 p-16">
        <img
          className="w-full h-full"
          src="src/assets/logo.svg"
          alt="JusCash Logo"
        />
      </header>
      <main className="w-full p-16 h-screen flex justify-start items-start">
        <LeadsManagement />
      </main>
    </>
  );
};

export default Home;
