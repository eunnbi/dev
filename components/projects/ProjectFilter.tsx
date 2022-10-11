import { SyntheticEvent } from "react";
import styled, { css } from "styled-components";
import { FILTERS } from "../../data/projects";
import { Tabs, Tab } from "@mui/material";
import { useCallback } from "react";

interface ProjectFilterProps {
  filterIndex: number;
  onSelect: (hash: string) => void;
}

const ProjectFilter = ({ filterIndex, onSelect }: ProjectFilterProps) => {
  const onChange = useCallback(
    (e: SyntheticEvent<Element, Event>, value: number) => {
      onSelect(FILTERS[value]);
    },
    []
  );
  return (
    <Filters>
      <CustomTabs value={filterIndex} onChange={onChange} variant="scrollable">
        {FILTERS.map((filter, index) => (
          <Tab label={filter} key={index} />
        ))}
      </CustomTabs>
    </Filters>
  );
};

export default ProjectFilter;

const Filters = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CustomTabs = styled(Tabs)`
  .MuiTab-root {
    height: 40px;
    min-height: auto;
    min-width: auto;
    padding: 5px 1rem;
    color: ${({ theme }) => theme.color.tabTextColor};
    font-weight: 500;
    transition: all 200ms ease;
    font-family: Pretendard, sans-serif;

    :hover {
      color: ${({ theme }) => theme.color.tabHoverTextColor};
      transition: all 200ms ease;
    }
  }
  .Mui-selected {
    background-color: ${({ theme }) => theme.color.tabSelectedBgColor};
    color: ${({ theme }) => theme.color.tabHoverTextColor};
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
