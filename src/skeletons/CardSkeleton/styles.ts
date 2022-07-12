import styled from "styled-components";

export const Container = styled.div`
  height: 345px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;

  -webkit-box-shadow: 4px 4px 11px 2px rgba(0, 0, 0, 0.47);
  box-shadow: 4px 4px 11px 2px rgba(0, 0, 0, 0.47);
  border-radius: 7px;
  margin-bottom: 1rem;
`;
export const CardSkeletonImg = styled.div`
  width: 85%;
  height: 65%;
  background: var(--black-200);
  margin-top: 1rem;
  border-radius: 7px;
  animation: blink 2s infinite;

  @keyframes blink {
    0% {
      filter: brightness(1);
    }
    100% {
      filter: brightness(0.7);
    }
  }
`;
export const CardSkeletonTitle = styled.div`
  height: 30px;
  width: 85%;
  background: var(--black-200);
  margin-top: 1rem;

  animation: blink 2s infinite;

  @keyframes blink {
    0% {
      filter: brightness(1);
    }
    100% {
      filter: brightness(0.7);
    }
  }
`;
