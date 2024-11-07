import Login from "../../components/Login";
import * as S from "./styled";

const LoginPage = () => {
  return (
    <S.PageContainer>
      <S.TitleContainer>
        <S.Title>
          <S.LoginText>LOGIN</S.LoginText>
          <S.Subtitle>SIGN IN TO YOUR ACCOUNT</S.Subtitle>
        </S.Title>
      </S.TitleContainer>
      <Login />
    </S.PageContainer>
  );
};

export default LoginPage;
