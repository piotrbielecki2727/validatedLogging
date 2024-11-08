import styled from "styled-components";
import { Button } from "../Button/Button";

const DropdownContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  width: 80px;
`;

const DropdownButton = styled(Button)`
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  gap: 6px;
  justify-content: center;
  width: 100%;
  text-align: center;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

type DropdownContentProps = {
  show: boolean;
};

const DropdownContent = styled.div<DropdownContentProps>`
  top: 100%;
  position: absolute;
  width: 80px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const DropdownItem = styled.a`
  color: ${({ theme }) => theme.text};
  padding: 8px 12px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

export { DropdownButton, DropdownContainer, DropdownContent, DropdownItem };
