import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);
  margin: 2rem;
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
      max-width: 7vw;
    }
  }
`;

export const Menu = styled.div`
  border: 1px solid var(--black-200);
  border-radius: 0.5rem;

  cursor: pointer;
  span {
    margin: 0.5rem;
    font-weight: bold;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--black);
  color: var(--white);

  margin-right: 1.5vw;
  margin-bottom: 100px;
  height: 20px;
  width: 20px;

  font-size: 1.2rem;
  border-radius: 100%;
`;
