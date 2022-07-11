import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  min-width: 280px;
  max-width: 280px;

  justify-content: space-between;

  margin-bottom: 15px;

  -webkit-box-shadow: 4px 4px 11px 2px rgba(0, 0, 0, 0.47);
  box-shadow: 4px 4px 11px 2px rgba(0, 0, 0, 0.47);

  border-radius: 7px;

  img {
    max-height: 180px;
  }

  div {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      font-weight: 500;
      font-size: 1.3rem;
    }

    div {
      font-size: 1.2rem;
      font-weight: 600;
      background: var(--black-700);
      color: var(--white);
      padding: 7px;
      border-radius: 6px;
    }
  }

  p {
    padding: 8px;
    margin-bottom: 14px;
    font-size: 0.8rem;
    font-weight: 400;
    color: var(--black-600);
  }

  button {
    background: var(--blue-800);
    border: none;
    color: var(--white);

    font-size: 1.2rem;
    font-weight: 600;

    padding: 8px 0;
    border-radius: 0 0 7px 7px;
  }
`;
