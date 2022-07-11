import CartItem from "../CartItem";
import user from "../CartItem/mock";
import { CartHeader, Container, Footer } from "./styles";

interface CartMenuProps {
  isCartMenuOpen: boolean;
  handleUserClickCart: () => void;
}

const CartMenu = ({ isCartMenuOpen, handleUserClickCart }: CartMenuProps) => {
  return (
    <Container isCartMenuOpen={isCartMenuOpen}>
      <div>
        <CartHeader>
          <p>Carrinho de compras</p>
          <span onClick={handleUserClickCart}>x</span>
        </CartHeader>

        <div>
          <CartItem {...user} />
        </div>
      </div>

      <Footer>
        <div>
          <p>Total:</p>
          <span>R$0</span>
        </div>

        <button>Finalizar Compra</button>
      </Footer>
    </Container>
  );
};

export default CartMenu;
