import { useTranslation } from 'react-i18next';
import Login from '../../components/Login';
import * as S from './styled';
import { TRANSLATIONS } from '../../languages/translationKeys';

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <S.PageContainer>
      <S.TitleContainer>
        <S.Title>
          <S.LoginText>{t(TRANSLATIONS.LOGGING)}</S.LoginText>
          <S.Subtitle>{t(TRANSLATIONS.LOGGING_SUBTITLE)}</S.Subtitle>
        </S.Title>
      </S.TitleContainer>
      <Login />
    </S.PageContainer>
  );
};

export default LoginPage;
