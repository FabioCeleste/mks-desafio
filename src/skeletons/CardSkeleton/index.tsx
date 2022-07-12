import { CardSkeletonImg, CardSkeletonTitle, Container } from "./styles";

interface CardSkeletonProps {
  count: number;
}

const CardSkeleton = ({ count }: CardSkeletonProps) => {
  const emptyArray = Array.from(Array(count).keys());

  return (
    <>
      {emptyArray.map((index) => {
        return (
          <Container key={index}>
            <CardSkeletonImg />

            <CardSkeletonTitle />
            <CardSkeletonTitle />
          </Container>
        );
      })}
    </>
  );
};

export default CardSkeleton;
