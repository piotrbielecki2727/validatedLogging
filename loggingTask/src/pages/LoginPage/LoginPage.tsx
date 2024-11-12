import { useTranslation } from "react-i18next";
import Login from "../../components/Login";
import * as S from "./styled";

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <S.PageContainer>
      <S.TitleContainer>
        <S.Title>
          <S.LoginText>{t("logging")}</S.LoginText>
          <S.Subtitle>{t("loggingSubtitle")}</S.Subtitle>
        </S.Title>
      </S.TitleContainer>
      <Login />
    </S.PageContainer>
  );
};

export default LoginPage;
