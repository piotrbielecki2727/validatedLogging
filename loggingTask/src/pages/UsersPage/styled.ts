import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  box-shadow: -1px 6px 20px -10px rgba(65, 65, 69, 0.2);

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%; /* Usuń ograniczenie szerokości */
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 25px;
  }
`;
