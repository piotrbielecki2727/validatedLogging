import { useGetUsers } from './hooks/useGetUsers';
import UsersTable from './UsersTable';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsCollapsed } from '../../lib/store/selectors';
import { toggleCollapse } from '../../lib/store/collapseSlice';
import * as S from './styled';
import { SecondaryBgButton } from '../ui/Button/Button';
import { t } from 'i18next';
import { TRANSLATIONS } from '../../languages/translationKeys';

const Container = () => {
  const dispatch = useDispatch();
  const isCollapsed = useSelector(selectIsCollapsed);
  const { users, isLoading } = useGetUsers(!isCollapsed);
  const { EXPAND_TABLE, COLLAPSE_TABLE } = TRANSLATIONS;

  const handleToggle = () => {
    dispatch(toggleCollapse());
  };

  return (
    <S.StyledContainer>
      <SecondaryBgButton onClick={handleToggle}>
        {isCollapsed ? t(EXPAND_TABLE) : t(COLLAPSE_TABLE)}
      </SecondaryBgButton>
      {!isCollapsed && (
        <S.AnimatedContainer $isCollapsed={isCollapsed}>
          <UsersTable users={users} isLoading={isLoading} />
        </S.AnimatedContainer>
      )}
    </S.StyledContainer>
  );
};

export default Container;
