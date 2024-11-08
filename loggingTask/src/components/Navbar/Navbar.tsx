import { useSelector } from "react-redux";
import Logout from "../Logout/Logout";
import ChangingTheme from "../ui/ChangingTheme";
import Dropdown from "../ui/Dropdown/Dropdown";
import * as S from "./styled";
import { selectIsLoggedIn } from "../../lib/store/selectors";

const Navbar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <S.Container>
      <ChangingTheme />
      <Dropdown />
      {isLoggedIn && <Logout />}
    </S.Container>
  );
};

export default Navbar;
