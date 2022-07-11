import type { NextPage } from "next";

import { GlobalStyle } from "../styles/global";

import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
};

export default Home;
