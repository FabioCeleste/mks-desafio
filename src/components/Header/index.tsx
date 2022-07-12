import { Container } from "./styles";
import { BsFillCartFill } from "react-icons/bs";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";

interface HeaderProps {
  handleUserClickCart: () => void;
}

const Header = ({ handleUserClickCart }: HeaderProps) => {
  const cart = useCart();

  return (
    <Container>
      <h1>
        MKS <span>Sistemas</span>
      </h1>

      <div onClick={handleUserClickCart}>
        <BsFillCartFill /> {cart.totalAmount}
      </div>
    </Container>
  );
};

export default Header;
