import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import CardItem, { CardItemProps } from "../CardItem";
import { Container } from "./styles";

const HomeItems = () => {
  const [products, setProducts] = useState<CardItemProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const prods = await getProducts(1, 10, "id", "DESC");
      setProducts(prods.products);
    };

    fetchData();
  }, []);

  return (
    <Container>
      {products.map((item) => (
        <CardItem {...item} />
      ))}
    </Container>
  );
};

export default HomeItems;
