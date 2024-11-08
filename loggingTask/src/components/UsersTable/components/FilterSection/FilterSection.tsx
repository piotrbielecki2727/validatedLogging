import { FilterValues } from "./types";
import { useDispatch } from "react-redux";
import * as S from "./styled";
import {
  filterUsers,
  resetFilterValues,
} from "../../../../lib/store/usersSlice";
import { OutlineButton } from "../../../ui/Button/Button";
import IconComponent from "../../../ui/IconComponent/IconComponent";
import { TbTrash } from "react-icons/tb";

type FilterSectionProps = {
  setFilterValues: (
    updater: (prevValues: FilterValues) => FilterValues
  ) => void;
  filterValues: FilterValues;
};

const FilterSection = ({
  setFilterValues,
  filterValues,
}: FilterSectionProps) => {
  const dispatch = useDispatch();

  const handleResetFilterValues = () => {
    dispatch(resetFilterValues());
    dispatch(filterUsers());
  };

  const isFilterApplied = Object.values(filterValues).some((value) => value);

  return (
    <S.FilterSectionContainer>
      <S.Search>
        <span>Search:</span>
      </S.Search>
      <S.GridDiv>
        {Object.entries(filterValues).map(([key, value]) => (
          <S.SearchBarContainer key={key}>
            <S.StyledSearchBar
              searchBarPlaceholder={`Filter by ${key}`}
              columnToFilter={key}
              filterValue={value}
              setFilterValue={(newValue) =>
                setFilterValues((prevValues) => ({
                  ...prevValues,
                  [key]: newValue,
                }))
              }
            />
          </S.SearchBarContainer>
        ))}

        {isFilterApplied && (
          <S.ButtonDiv>
            <OutlineButton
              width="100%"
              onClick={handleResetFilterValues}
              color="theme"
            >
              <IconComponent icon={TbTrash} />
              Reset filters
            </OutlineButton>
          </S.ButtonDiv>
        )}
      </S.GridDiv>
    </S.FilterSectionContainer>
  );
};

export default FilterSection;
