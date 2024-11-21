import Title from '../../components/ui/Title/Title';
import UsersTable from '../../components/UsersTable';
import { useTranslation } from 'react-i18next';
import * as S from './styled';
import { TRANSLATIONS } from '../../languages/translationKeys';

export default function Users() {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Title
        title={t(TRANSLATIONS.USERS_TITLE)}
        subtitle={t(TRANSLATIONS.USERS_SUBTITLE)}
      />
      <UsersTable />
    </S.Container>
  );
}
