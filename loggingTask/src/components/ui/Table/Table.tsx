import { ReactNode } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import styled from "styled-components";

type TTableProps = {
  className?: string;
  children: ReactNode;
};

const StyledTable = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.secondary};
`;

const Table = ({ children }: TTableProps) => {
  return <StyledTable>{children}</StyledTable>;
};

Table.Header = Header;
Table.Content = Content;
Table.Footer = Footer;

export default Table;
