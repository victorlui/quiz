import { Container } from "./styles";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  return <Container>{children}</Container>;
};

export default Card;
