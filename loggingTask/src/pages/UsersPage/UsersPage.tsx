import Title from "../../components/ui/Title/Title";
import UsersTable from "../../components/UsersTable";
import { useTranslation } from "react-i18next";
import * as S from "./styled";

export default function Users() {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Title title={t(`usersTitle`)} subtitle={t(`usersSubtitle`)} />
      <UsersTable />
    </S.Container>
  );
}
