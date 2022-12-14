import { SyntheticEvent } from "react";
import styled from "styled-components";
import { Tabs, Tab } from "@mui/material";
import { useCallback } from "react";
import { SetterOrUpdater } from "recoil";

interface FilterProps {
  filters: string[];
  filter: Filter;
  setFilter: SetterOrUpdater<Filter>;
}

const Filter = ({ filters, filter, setFilter }: FilterProps) => {
  const onChange = useCallback(
    (e: SyntheticEvent<Element, Event>, value: Filter) => {
      setFilter(value);
    },
    []
  );
  return (
    <Wrapper>
      <CustomTabs value={filter} onChange={onChange} variant="scrollable">
        {filters.map((filter, index) => (
          <Tab label={filter} key={index} value={filter} />
        ))}
      </CustomTabs>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CustomTabs = styled(Tabs)`
  .MuiTab-root {
    min-height: auto;
    min-width: auto;
    padding: 0.8rem;
    font-weight: 500;
    transition: all 200ms ease;
    color: ${({ theme }) => theme.color.tabTextColor};
    font-family: Pretendard, sans-serif;
    font-size: 1rem;

    :hover {
      transition: all 200ms ease;
    }
  }
  .Mui-selected {
    color: #1976d2;
    background-color: ${({ theme }) => theme.color.tabSelectedBgColor};
    font-weight: 600;
    border-radius: 8px;
  }
  .MuiTabScrollButton-root {
    height: 40px;
    width: 20px;
  }

  .MuiTabs-indicator {
    display: none;
  }
`;

export default Filter;
