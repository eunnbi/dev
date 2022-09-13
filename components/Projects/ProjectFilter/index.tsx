import styled, { css } from "styled-components";
import { FILTERS } from "../../../constants/projects";

interface ProjectFilterProps {
  selectedId: number;
  onSelect: (id: number) => void;
}

const ProjectFilter = ({ selectedId, onSelect }: ProjectFilterProps) => {
  return (
    <Filters>
      {FILTERS.map((filter, index) => (
        <FilterButton
          key={index}
          isSelected={selectedId === index}
          onClick={() => onSelect(index)}
        >
          {filter}
        </FilterButton>
      ))}
    </Filters>
  );
};

export default ProjectFilter;

const Filters = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const selectedStyle = css`
  color: #fff;
  background-color: #000;
`;

const FilterButton = styled.button<{ isSelected: boolean }>`
  border-radius: 1.8rem;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.color.textColor};
  font-weight: bold;
  ${({ isSelected }) => isSelected && selectedStyle};
`;
