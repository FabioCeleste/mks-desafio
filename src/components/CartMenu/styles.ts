import styled from "styled-components";

interface CartMenuStyleProps {
  isCartMenuOpen: boolean;
}

export const Container = styled.div<CartMenuStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  right: 0;
  width: 35vw;
  height: 100vh;
  background: var(--blue-800);
  animation: ${(p) => (p.isCartMenuOpen ? "open" : "close")} 1s;

  animation-direction: alternate;

  ${(p) => (p.isCartMenuOpen ? "" : "transform: translate(100%, 0px);")}

  @keyframes close {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(100%, 0px);
    }
  }
  @keyframes open {
    0% {
      transform: translate(100%, 0);
    }
    100% {
      transform: translate(0px, 0px);
    }
  }
`;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 3rem;

  p {
    color: var(--white);
    font-weight: 600;
    font-size: 1.8rem;
    width: 40%;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    background: var(--black);
    color: var(--white);
    font-size: 1.4rem;

    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
  }
`;

export const Footer = styled.div`
  color: var(--white);
  font-weight: bold;
  font-size: 1.5rem;
  div {
    display: flex;
    justify-content: space-between;
    margin: 3rem;
  }

  button {
    width: 100%;
    height: 4vw;
    background: var(--black);
    color: var(--white);
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
