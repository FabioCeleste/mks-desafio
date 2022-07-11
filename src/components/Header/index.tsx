import { Container } from "./styles";
import { BsFillCartFill } from "react-icons/bs";

interface HeaderProps {
  handleUserClickCart: () => void;
}

const Header = ({ handleUserClickCart }: HeaderProps) => {
  return (
    <Container>
      <h1>
        MKS <span>Sistemas</span>
      </h1>

      <div onClick={handleUserClickCart}>
        <BsFillCartFill />0
      </div>
    </Container>
  );
};

export default Header;
