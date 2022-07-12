import CardItem, { CardItemProps } from "../CardItem";
import { Container } from "./styles";

interface HomeItemsProps {
  products: CardItemProps[];
}

const HomeItems = ({ products }: HomeItemsProps) => {
  return (
    <Container>
      {products.map((item) => (
        <CardItem key={item.id} {...item} />
      ))}
    </Container>
  );
};

export default HomeItems;
