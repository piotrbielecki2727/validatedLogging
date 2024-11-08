import { FC } from "react";
import { IconType } from "react-icons";
import styled from "styled-components";

type IconProps = {
  icon: IconType;
};

const IconWrapper = styled.div`
  height: 1.2rem;
  width: 1.2rem;
`;

const IconComponent: FC<IconProps> = ({ icon: Icon }) => (
  <IconWrapper as={Icon} />
);

export default IconComponent;
