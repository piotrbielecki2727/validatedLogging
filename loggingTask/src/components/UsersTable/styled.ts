import styled, { keyframes } from 'styled-components';

interface AnimatedContainerProps {
  $isCollapsed: boolean;
}

const slideIn = keyframes`
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 1000px;
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    max-height: 1000px;
    opacity: 1;
  }
  to {
    max-height: 0;
    opacity: 0;
  }
`;

export const AnimatedContainer = styled.div<AnimatedContainerProps>`
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  animation: ${(props) => (props.$isCollapsed ? slideOut : slideIn)} 0.8s
    forwards;
  max-height: ${(props) => (props.$isCollapsed ? '0' : '1000px')};
  opacity: ${(props) => (props.$isCollapsed ? 0 : 1)};
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.primary};
  border-radius: 8px;
`;
