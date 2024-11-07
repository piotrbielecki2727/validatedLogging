import { styled } from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
  gap: 8px;
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-size: medium;
  cursor: pointer;
  border: none;
`;

const LoginButton = styled(Button)`
  background-color: #4891f5;
  &:hover {
    background-color: #4891ce;
  }
`;

const LogoutButton = styled(Button)`
  background-color: #2b2ec7;
  &:hover {
    background-color: #1b1c8b;
  }
`;

export { LoginButton, LogoutButton };
