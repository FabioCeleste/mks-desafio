import type { NextPage } from "next";

import { GlobalStyle } from "../styles/global";

import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getProducts } from "../services/products";
import CardItem, { CardItemProps } from "../components/CardItem";
import HomeItems from "../components/HomeItems";

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <GlobalStyle />
      <Header />
      <HomeItems />
    </div>
  );
};

export default Home;
