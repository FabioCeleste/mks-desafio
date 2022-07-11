import { CardItemProps } from "../CardItem";
import { Footer } from "../CartMenu/styles";
import { CloseButton, Container, Menu } from "./styles";

const CartItem = ({ name, photo, price }: CardItemProps) => {
  return (
    <>
      <CloseButton>x</CloseButton>
      <Container>
        <div>
          <img src={photo} alt={name} />

          <p>{name}</p>

          <Menu>
            <div>
              <span>-</span> |<span>0</span> |<span>+</span>
            </div>
          </Menu>
        </div>
      </Container>
    </>
  );
};

export default CartItem;
