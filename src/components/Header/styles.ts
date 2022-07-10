import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;

  background: var(--blue-800);
  color: var(--white);

  font-size: 1.25rem;

  h1 {
    cursor: pointer;
    margin-left: 2rem;

    span {
      font-weight: 100;
      font-size: 0.95rem;
    }
  }

  div {
    cursor: pointer;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: 3.5rem;
    border-radius: 0.3rem;

    background: var(--white);
    color: var(--black-700);
    font-weight: bold;
    font-size: 1.1rem;

    width: 4.3rem;
    height: 1.95rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
