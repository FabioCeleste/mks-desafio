import { Container } from "./styles";
import { BsFillCartFill } from "react-icons/bs";
import { useCart } from "../../hooks/useCart";

export interface CardItemProps {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
}

const CardItem = (props: CardItemProps) => {
  const cart = useCart();
  const { photo, description, name, price, id } = props;

  function formatPrice() {
    const priceArray = price.split(".");
    return priceArray[0];
  }
  function formatDescription() {
    let newDescription = description.slice(0, 70);
    newDescription += "...";
    return newDescription;
  }

  return (
    <Container>
      <img src={photo} alt={description} />

      <div>
        <h3>{name}</h3>

        <div>R${formatPrice()}</div>
      </div>

      <p>{formatDescription()}</p>

      <button onClick={() => cart.addNewItemToCart(id, props)}>
        <BsFillCartFill /> COMPRAR
      </button>
    </Container>
  );
};

export default CardItem;
