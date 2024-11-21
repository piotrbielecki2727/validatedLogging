import styled from 'styled-components';

const PageContainer = styled.div`
  background: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  display: flex;
  min-width: 400px;
  flex-direction: column;
  border-radius: 5px;
  -webkit-box-shadow: -2px 8px 28px -20px rgba(65, 65, 69, 1);
  -moz-box-shadow: -2px 8px 28px -20px rgba(65, 65, 69, 1);
  box-shadow: -2px 8px 28px -20px rgba(65, 65, 69, 1);
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 30px;
`;

const Title = styled.div`
  flex-direction: column;
  display: flex;
  justify-content: start;
  gap: 16px;
`;

const LoginText = styled.span`
  font-size: larger;
  color: ${({ theme }) => theme.text};
`;

const Subtitle = styled.span`
  font-size: smaller;
  color: ${({ theme }) => theme.colors.secondary};
`;

export { PageContainer, Title, LoginText, Subtitle, TitleContainer };
