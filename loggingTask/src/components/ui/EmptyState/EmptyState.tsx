import { PiPackage } from "react-icons/pi";
import { Container, Span } from "./styled";

interface EmptyState {
  title: string;
  className?: string;
}

const EmptyState = ({ title }: EmptyState) => (
  <Container>
    <div>
      <PiPackage size={70} />
    </div>
    <Span>{title}</Span>
  </Container>
);

export default EmptyState;
