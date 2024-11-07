import { useDispatch } from "react-redux";
import { LogoutButton } from "../ui";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { showSuccessToast } from "../../utils/toast";
const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    showSuccessToast("Logged out successfully!");
    navigate("/", { replace: true });
  };

  return (
    <LogoutButton onClick={handleLogout}>
      <TbLogout2 size={25} />
      Logout
    </LogoutButton>
  );
};

export default Logout;
