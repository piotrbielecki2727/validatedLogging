import { useState } from "react";
import * as S from "./styled";
import { MdLanguage } from "react-icons/md";
import IconComponent from "../IconComponent/IconComponent";
import { useTranslation } from "react-i18next";
const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowDropdown(!showDropdown);
  };

  return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={() => setShowDropdown(!showDropdown)}>
        <IconComponent icon={MdLanguage} />
        {i18n.language.toUpperCase()}
      </S.DropdownButton>
      <S.DropdownContent $show={showDropdown}>
        <S.DropdownItem onClick={() => changeLanguage("pl")}>PL</S.DropdownItem>
        <S.DropdownItem onClick={() => changeLanguage("eng")}>ENG</S.DropdownItem>
      </S.DropdownContent>
    </S.DropdownContainer>
  );
};

export default Dropdown;
