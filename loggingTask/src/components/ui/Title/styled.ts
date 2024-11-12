import styled from "styled-components";

const Container = styled.div`
  padding: 0.25rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const TitleText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;

  @media (min-width: 640px) {
    font-size: 1.875rem;
  }
`;

const SubtitleText = styled.span`
  color: #9ca3af;
`;

const StyledSeparator = styled.hr`
  margin: 0.5rem 0;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export { Container, StyledSeparator, SubtitleText, TitleText, TitleWrapper };
