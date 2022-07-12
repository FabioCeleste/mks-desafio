import { useState } from "react";
import { useCart } from "../../hooks/useCart";
import CartItem from "../CartItem";
import { CartContainer, CartHeader, Container, Footer } from "./styles";

interface CartMenuProps {
  isCartMenuOpen: boolean;
  handleUserClickCart: () => void;
}

const CartMenu = ({ isCartMenuOpen, handleUserClickCart }: CartMenuProps) => {
  const cart = useCart();

  function formatTotalValue() {
    let totalValue = 0;

    cart.items.map((cartItem, acc) => {
      const newValue =
        cartItem.amount * parseFloat(cartItem.apiCartItem.price.split(".")[0]);
      totalValue = newValue + totalValue;
    });

    return totalValue;
  }

  return (
    <Container isCartMenuOpen={isCartMenuOpen}>
      <div>
        <CartHeader>
          <p>Carrinho de compras</p>
          <span onClick={handleUserClickCart}>x</span>
        </CartHeader>

        <CartContainer>
          {cart.items.map((cartItem) => {
            return (
              <CartItem
                key={cartItem.id}
                cardItem={cartItem.apiCartItem}
                amount={cartItem.amount}
              />
            );
          })}
        </CartContainer>
      </div>

      <Footer>
        <div>
          <p>Total:</p>
          <span>R$ {formatTotalValue()}</span>
        </div>

        <button>Finalizar Compra</button>
      </Footer>
    </Container>
  );
};

export default CartMenu;
