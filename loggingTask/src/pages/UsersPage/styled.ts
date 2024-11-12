import { styled } from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: 30px;
  border: ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  -webkit-box-shadow: -1px 4px 16px -10px rgba(65, 65, 69, 20);
  -moz-box-shadow: -1px 4px 16px -10px rgba(65, 65, 69, 20);
  box-shadow: -1px 6px 20px -10px rgba(65, 65, 69, 20);

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 375px;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 25px;
    max-width: 768px;
    width: 100%;
  }

  @media (min-width: 1025px) {
    padding: 30px;
    max-width: fit-content;
    width: 100%;
  }
`;
