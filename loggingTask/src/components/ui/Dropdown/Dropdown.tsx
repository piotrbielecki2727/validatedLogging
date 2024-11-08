import { useState } from "react";
import * as S from "./styled";
import { MdLanguage } from "react-icons/md";
import IconComponent from "../IconComponent/IconComponent";
const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={toggleDropdown}>
        <IconComponent icon={MdLanguage} />
        PL
      </S.DropdownButton>
      <S.DropdownContent show={showDropdown}>
        <S.DropdownItem href="#">PL</S.DropdownItem>
        <S.DropdownItem href="#">ENG</S.DropdownItem>
      </S.DropdownContent>
    </S.DropdownContainer>
  );
};

export default Dropdown;
