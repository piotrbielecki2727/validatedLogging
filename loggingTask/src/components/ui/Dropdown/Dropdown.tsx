import { useState } from "react";
import * as S from "./styled";
import { MdLanguage } from "react-icons/md";
import IconComponent from "../IconComponent/IconComponent";
import { AvailableLanguages, useLanguage } from "../../../i18n";
const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleChangeLanguage = (lng: string) => {
    changeLanguage(lng as AvailableLanguages);
    setShowDropdown(!showDropdown);
  };

  return (
    <S.DropdownContainer>
      <S.DropdownButton onClick={() => setShowDropdown(!showDropdown)}>
        <IconComponent icon={MdLanguage} />
        {currentLanguage.toUpperCase()}
      </S.DropdownButton>
      <S.DropdownContent $show={showDropdown}>
        <S.DropdownItem onClick={() => handleChangeLanguage("pl")}>
          PL
        </S.DropdownItem>
        <S.DropdownItem onClick={() => handleChangeLanguage("eng")}>
          ENG
        </S.DropdownItem>
      </S.DropdownContent>
    </S.DropdownContainer>
  );
};

export default Dropdown;
