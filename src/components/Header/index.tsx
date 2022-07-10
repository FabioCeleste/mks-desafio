import { Container } from "./styles";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  return (
    <Container>
      <h1>
        MKS <span>Sistemas</span>
      </h1>

      <div>
        <BsFillCartFill />0
      </div>
    </Container>
  );
};

export default Header;
