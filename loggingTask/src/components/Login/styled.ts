import styled from "styled-components";

const FormContainer = styled.div`
  padding: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const InputLabel = styled.label`
  font-size: small;
  font-weight: bolder;
  color: #bebfc1;
`;

const InputWithIcon = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid #d8d9da;
  border-radius: 5px;
  background-color: white;
`;

const Icon = styled.div`
  padding: 10px;
  color: #d8d9da;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  display: flex;
  font-size: smaller;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &:focus {
    outline: none;
    border: none;
  }
`;

const Button = styled.button`
  background-color: #4891f5;
  color: white;
  border-radius: 5px;
  padding: 10px;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #4891ce;
  }
`;

const ForgotPassword = styled.div`
  display: flex;
  padding-top: 25px;
  justify-content: center;
  font-size: smaller;
  color: #bebfc1;
  margin: auto;
`;

const Error = styled.span`
  color: red;
  font-size: smaller;
`;

export {
  FormContainer,
  Form,
  FormElement,
  InputLabel,
  InputWithIcon,
  Input,
  Icon,
  Button,
  ForgotPassword,
  Error,
};
