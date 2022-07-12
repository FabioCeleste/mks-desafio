import { useCart } from "../../hooks/useCart";
import { CardItemProps } from "../CardItem";

import { CloseButton, Container, Menu, Price } from "./styles";

interface CartItemProps {
  cardItem: CardItemProps;
  amount: number;
}

const CartItem = ({ cardItem, amount }: CartItemProps) => {
  const { name, photo, price } = cardItem;
  const cart = useCart();
  return (
    <div>
      <CloseButton onClick={() => cart.deleteItemFromCart(cardItem.id)}>
        x
      </CloseButton>
      <Container>
        <div>
          <div>
            <img src={photo} alt={name} />

            <p>{name}</p>
          </div>

          <Menu>
            <button onClick={() => cart.removeItemFromCart(cardItem.id)}>
              -
            </button>
            | <span>{amount}</span> |
            <button
              onClick={() => cart.addNewItemToCart(cardItem.id, cardItem)}
            >
              +
            </button>
          </Menu>
          <Price>R${price}</Price>
        </div>
      </Container>
    </div>
  );
};

export default CartItem;
