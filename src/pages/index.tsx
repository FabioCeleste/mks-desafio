import type { NextPage } from "next";
import Header from "../components/Header";
import { GlobalStyle } from "../styles/global";

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
};

export default Home;
