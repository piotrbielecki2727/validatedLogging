import styled from "styled-components";
import EmptyState from "../../EmptyState/EmptyState";
import { LuLoader } from "react-icons/lu";

const StyledCell1 = styled.td`
  padding: 0.75rem;
`;

const StyledCell2 = styled.td`
  text-align: center;
  background-color: ${({ theme }) => theme.body};
  &:hover {
    background-color: ${({ theme }) => theme.body};
  }
`;

const StyledEmptyState = styled(EmptyState)`
  height: auto;
  background-color: ${({ theme }) => theme.body};
  &:hover {
    background-color: ${({ theme }) => theme.body};
  }
`;

const StyledLoaderCell = styled.td`
  height: 6rem;
  text-align: center;
`;

const StyledLoaderDiv = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  height: 16rem;
`;

const StyledLoader = styled(LuLoader)`
  animation: spin 1s linear infinite;
  margin-right: 0.5rem;
`;

const StyledTable = styled.table`
  width: 100%;
  min-width: 100%;
  overflow-x: auto;
  display: block;
`;

const StyledTableHeader = styled.thead`
  position: sticky;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  top: 0;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
  color: ${({ theme }) => theme.text};
  text-align: left;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.1);
`;

const StyledHeaderCell = styled.th`
  padding: 0.75rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
`;

const StyledTableRow = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondary};
  }
`;

const StyledTableBodyRow = styled.tr`
  &:hover {
    background-color: ${({ theme }) => theme.colors.background.secondaryHover};
  }
`;

const StyledCell = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  padding: 0.75rem;
  color: ${({ theme }) => theme.text};
`;

export {
  StyledCell1,
  StyledCell2,
  StyledCell,
  StyledHeaderCell,
  StyledEmptyState,
  StyledLoader,
  StyledLoaderCell,
  StyledLoaderDiv,
  StyledTable,
  StyledTableBodyRow,
  StyledTableHeader,
  StyledTableRow,
};
