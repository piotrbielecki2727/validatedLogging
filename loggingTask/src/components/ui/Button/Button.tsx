import { ButtonHTMLAttributes } from 'react';
import { styled } from 'styled-components';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
}

const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  width: ${({ width }) => width || 'auto'};
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  padding: 10px;
  color: white;
  font-size: medium;
  cursor: pointer;
  border: none;
`;

const BlueButton = styled(Button)`
  background-color: #4891f5;
  &:hover {
    background-color: #4891ce;
  }
`;

const SecondaryBgButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondaryHover};
  }
`;

const OutlineButton = styled(Button)`
  background-color: ${({ theme }) => theme.body};
  width: ${({ width }) => width || 'auto'};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondaryHover};
  }
`;

export { Button, BlueButton, OutlineButton, SecondaryBgButton };
