import styled from 'styled-components';
import { TInputValue } from '../../../../types';

type SearchBarProps = {
  columnToFilter?: string;
  searchBarPlaceholder?: string;
  filterValue: TInputValue;
  setFilterValue: (value: TInputValue) => void;
  className?: string;
};

const StyledInput = styled.input`
  height: 3rem;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  color: ${({ theme }) => theme.text};
  width: 100%;
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};
  }
`;

const SearchBar = ({
  searchBarPlaceholder = 'Name',
  filterValue,
  setFilterValue,
}: SearchBarProps) => {
  return (
    <StyledInput
      placeholder={`${searchBarPlaceholder}...`}
      value={filterValue}
      onChange={(e) => setFilterValue(e.target.value as TInputValue)}
    />
  );
};

export default SearchBar;
