import styled from "styled-components";

const PageContainer = styled.div`
  background-color: white;
  border: 1px solid #d8d9da;
  display: flex;
  min-width: 400px;
  flex-direction: column;
  border-radius: 5px;
  -webkit-box-shadow: -2px 8px 28px -20px rgba(65, 65, 69, 1);
  -moz-box-shadow: -2px 8px 28px -20px rgba(65, 65, 69, 1);
  box-shadow: -2px 8px 28px -20px rgba(65, 65, 69, 1);
`;

const TitleContainer = styled.div`
  border-bottom: 1px solid #d8d9da;

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
`;

const Subtitle = styled.span`
  font-size: smaller;
  color: #bebfc1;
`;

const FormContainer = styled.div`
  padding: 30px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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

export {
  PageContainer,
  Title,
  LoginText,
  Subtitle,
  TitleContainer,
  FormContainer,
  Form,
  FormElement,
  InputLabel,
  InputWithIcon,
  Input,
  Icon,
  Button,
  ForgotPassword,
};
