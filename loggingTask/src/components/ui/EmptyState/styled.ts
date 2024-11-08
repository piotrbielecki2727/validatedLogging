import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  justify-items: center;
  padding: 32px;
  gap: 8px;
`;

const Span = styled.span`
  font-size: x-large;
  font-weight: bolder;
  margin-bottom: 8px;
`;

export { Container, Span };
