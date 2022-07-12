import { useEffect, useState } from "react";
import { getProducts } from "../../services/products";
import { CardItemProps } from "../CardItem";
import CartMenu from "../CartMenu";
import Header from "../Header";
import HomeItems from "../HomeItems";
import { Container } from "./styles";

const HomePage = () => {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);
  const [products, setProducts] = useState<CardItemProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const fetchData = async () => {
        const prods = await getProducts(1, 10, "id", "DESC");
        setProducts(prods.products);
        setIsLoading(false);
      };

      fetchData();
    }, 1500);
  }, []);

  function handleUserClickCart() {
    setIsCartMenuOpen(!isCartMenuOpen);
  }

  return (
    <Container>
      <Header handleUserClickCart={handleUserClickCart} />
      <HomeItems isLoading={isLoading} products={products} />
      <CartMenu
        isCartMenuOpen={isCartMenuOpen}
        handleUserClickCart={handleUserClickCart}
      />
    </Container>
  );
};
export default HomePage;
