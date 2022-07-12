import styled from "styled-components";

interface CartMenuStyleProps {
  isCartMenuOpen: boolean;
}

export const Container = styled.div<CartMenuStyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  right: 0;
  width: 35vw;
  height: 100vh;
  background: var(--blue-800);
  animation: ${(p) => (p.isCartMenuOpen ? "open" : "close")} 1s;

  animation-direction: alternate;

  ${(p) => (p.isCartMenuOpen ? "" : "transform: translate(100%, 0px);")}
  ${(p) => (p.isCartMenuOpen ? "" : "display: none;")}

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

  @media (max-width: 1300px) {
    width: 55vw;
  }
  @media (max-width: 800px) {
    width: 100vw;
  }
`;

export const CartHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 2rem 0 2rem;

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
    margin: 0 2rem 2rem 2rem;
    justify-content: space-between;
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

export const CartContainer = styled.div`
  overflow-y: scroll;
  height: 33vw;
  margin-top: 2rem;
  margin-right: 0.3rem;

  ::-webkit-scrollbar {
    width: 15px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--blue-600);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--blue-900);
  }
`;
