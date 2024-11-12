import { useDispatch } from "react-redux";
import { logout } from "../../lib/store/authSlice";
import { useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { showSuccessToast } from "../../lib/utils/toast";
import IconComponent from "../ui/IconComponent/IconComponent";
import { SecondaryBgButton } from "../ui/Button/Button";
import { useTranslation } from "react-i18next";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(logout());
    showSuccessToast(t("successLogout"));
    navigate("/", { replace: true });
  };

  return (
    <SecondaryBgButton onClick={handleLogout}>
      <IconComponent icon={TbLogout2} />
      {t("logout")}
    </SecondaryBgButton>
  );
};

export default Logout;
