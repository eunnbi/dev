import { SyntheticEvent } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

interface FilterProps {
  queryName: string;
  filters: string[];
  filter: Filter;
  defaultFilter: Filter;
}

export default function Filter({
  queryName,
  filters,
  filter,
  defaultFilter
}: FilterProps) {
  const router = useRouter();
  const onChange = (_: SyntheticEvent<Element, Event>, value: Filter) => {
    const splitedPath = router.asPath.split("?");
    const basePath = splitedPath[0];
    const params = new URLSearchParams(splitedPath[1]);
    params.delete(queryName);
    if (value !== defaultFilter) {
      params.append(queryName, value);
    }
    router.push(`${basePath}?${params}`);
  };
  return (
    <Wrapper>
      {/* <div value={filter} onChange={onChange} variant="scrollable">
        {filters.map((filter, index) => (
          <div label={filter} key={index} value={filter} />
        ))}
      </div> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

// const CustomTabs = styled(Tabs)`
//   .MuiTab-root {
//     min-height: auto;
//     min-width: auto;
//     padding: 0.8rem;
//     font-weight: 500;
//     transition: all 200ms ease;
//     color: ${({ theme }) => theme.color.tabTextColor};
//     font-family: Pretendard, sans-serif;
//     font-size: 1rem;

//     :hover {
//       transition: all 200ms ease;
//     }
//   }
//   .Mui-selected {
//     color: #1976d2;
//     background-color: ${({ theme }) => theme.color.tabSelectedBgColor};
//     font-weight: 600;
//     border-radius: 8px;
//   }
//   .MuiTabScrollButton-root {
//     height: 40px;
//     width: 20px;
//   }

//   .MuiTabs-indicator {
//     display: none;
//   }
// `;
