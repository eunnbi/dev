import { DIRECTIONAL } from "../../constants/directional";
import DirectionalItem from "./DirectionalItem";
import styled from "styled-components";

const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(300px, 600px));
  gap: 2rem;
  margin-top: 1.5rem;
  @media screen and (max-width: 1200px) {
    grid-template-columns: auto;
  }
`;
const DirectionalList = () => {
  return (
    <StyledList>
      {DIRECTIONAL.map((direction) => (
        <DirectionalItem
          key={direction.id}
          title={direction.title}
          contents={direction.contents}
          icon={direction.icon}
        />
      ))}
    </StyledList>
  );
};

export default DirectionalList;
