import { useNavigate } from 'react-router-dom';
import { TbLogout2 } from 'react-icons/tb';
import { showSuccessToast } from '../../lib/utils/toast';
import IconComponent from '../ui/IconComponent/IconComponent';
import { SecondaryBgButton } from '../ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { TRANSLATIONS } from '../../languages/translationKeys';
import { PageRoutes } from '../../routes/routes';
import { resetStore } from '../../lib/store/store';
const Logout = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { LOGIN_PAGE } = PageRoutes;

  const handleLogout = () => {
    resetStore();
    showSuccessToast(t('successLogout'));
    navigate(LOGIN_PAGE, { replace: true });
  };

  return (
    <SecondaryBgButton onClick={handleLogout}>
      <IconComponent icon={TbLogout2} />
      {t(TRANSLATIONS.LOGOUT)}
    </SecondaryBgButton>
  );
};

export default Logout;
