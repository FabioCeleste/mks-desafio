import Head from "next/head";
import HomePage from "../components/HomePage";
import { CartProvider } from "../hooks/useCart";
import { GlobalStyle } from "../styles/global";

const Home = () => {
  return (
    <CartProvider>
      <Head>
        <title>MKSHOP</title>
      </Head>
      <GlobalStyle />
      <HomePage />
    </CartProvider>
  );
};

export default Home;
