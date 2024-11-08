import { useDispatch } from "react-redux";
import { logout } from "../../lib/store/authSlice";
import { useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { showSuccessToast } from "../../lib/utils/toast";
import IconComponent from "../ui/IconComponent/IconComponent";
import { SecondaryBgButton } from "../ui/Button/Button";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    showSuccessToast("Logged out successfully!");
    navigate("/", { replace: true });
  };

  return (
    <SecondaryBgButton onClick={handleLogout}>
      <IconComponent icon={TbLogout2} />
      Logout
    </SecondaryBgButton>
  );
};

export default Logout;
