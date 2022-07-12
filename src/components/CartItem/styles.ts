import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  margin: 0 2rem 2rem 2rem;
  padding: 1.5rem;
  border-radius: 0.5rem;

  img {
    max-height: 4rem;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    p {
      max-width: 4vw;
      min-width: 4vw;
    }
  }
`;

export const Menu = styled.div`
  border: 1px solid var(--black-200);
  border-radius: 0.5rem;

  cursor: pointer;
  button {
    margin: 0.5rem;
    font-weight: bold;
    background: none;
    border: none;
  }
  span {
    padding: 0.5rem;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  margin-right: 2.7rem;
  margin-bottom: 1.5rem;

  height: 1.4rem;
  width: 1.4rem;

  border-radius: 50%;
  color: var(--white);
  background: var(--black);
`;

export const Price = styled.p`
  font-weight: 800;
`;
