import { useState } from "react";
import CartMenu from "../CartMenu";
import Header from "../Header";
import HomeItems from "../HomeItems";
import { Container } from "./styles";

const HomePage = () => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  function handleUserClickCart() {
    setIsCartMenuOpen(!isCartMenuOpen);
  }

  return (
    <Container>
      <Header handleUserClickCart={handleUserClickCart} />
      <HomeItems />
      <CartMenu
        isCartMenuOpen={isCartMenuOpen}
        handleUserClickCart={handleUserClickCart}
      />
    </Container>
  );
};
export default HomePage;
