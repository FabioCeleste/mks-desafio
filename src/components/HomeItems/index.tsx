import CardSkeleton from "../../skeletons/CardSkeleton";

import CardItem, { CardItemProps } from "../CardItem";
import { Container } from "./styles";

interface HomeItemsProps {
  products: CardItemProps[];
  isLoading: boolean;
}

const HomeItems = ({ products, isLoading }: HomeItemsProps) => {
  isLoading ? "" : "";

  function renderProducts() {
    return products.map((item) => <CardItem key={item.id} {...item} />);
  }

  return (
    <Container>
      {isLoading ? <CardSkeleton count={8} /> : renderProducts()}
    </Container>
  );
};

export default HomeItems;
