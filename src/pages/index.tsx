import HomePage from "../components/HomePage";
import { CartProvider } from "../hooks/useCart";
import { GlobalStyle } from "../styles/global";

const Home = () => {
  return (
    <CartProvider>
      <GlobalStyle />
      <HomePage />
    </CartProvider>
  );
};

export default Home;
