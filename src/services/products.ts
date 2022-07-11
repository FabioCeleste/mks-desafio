import { CardItemProps } from "../components/CardItem";
import { api } from "./api";

export async function getProducts(
  page: number,
  rows: number,
  sortBy: "id" | "name" | "price",
  orderBy: "DESC" | "ASC"
): Promise<{
  products: CardItemProps[];
  count: number;
}> {
  const res = await api.get(
    `/products?page=${page}&rows=${rows}&sortBy=${sortBy}&orderBy=${orderBy}`
  );

  return res.data as any;
}
