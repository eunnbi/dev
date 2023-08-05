import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useScrollStore } from "@/stores/scrollState";

interface FilterProps {
  filters: string[];
  selectedFilter: Filter;
  changeFilter: (filter: Filter) => void;
}

export default function Filter({
  filters,
  selectedFilter,
  changeFilter
}: FilterProps) {
  const scrollBoxRef = useRef<HTMLDivElement | null>(null);
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);
  const { scrollLeft, setScrollState } = useScrollStore();
  const onClickScrollButton = (type: "prev" | "next") => {
    if (scrollBoxRef.current === null) return;
    if (type === "prev") {
      setScrollState({
        scrollLeft: scrollLeft - scrollBoxRef.current.clientWidth
      });
    } else {
      setScrollState({
        scrollLeft: scrollLeft + scrollBoxRef.current.clientWidth
      });
    }
  };
  const onClickFilterButton = (filter: Filter) => {
    changeFilter(filter);
    setScrollState({ scrollLeft: scrollBoxRef.current!.scrollLeft });
  };
  useEffect(() => {
    if (scrollLeft <= 0) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }
    if (
      Math.ceil(scrollLeft + scrollBoxRef.current!.clientWidth) >=
      scrollBoxRef.current!.scrollWidth
    ) {
      setNextDisabled(true);
    } else {
      setNextDisabled(false);
    }
    scrollBoxRef.current!.scrollTo({
      left: scrollLeft,
      behavior: "smooth"
    });
  }, [scrollLeft]);
  return (
    <Wrapper>
      <ScrollButton
        type="button"
        onClick={() => onClickScrollButton("prev")}
        aria-label="탭 이전 버튼"
        className="prev-button"
        disabled={prevDisabled}
      >
        <FiChevronLeft className="icon" />
      </ScrollButton>
      <ScrollableBox ref={scrollBoxRef}>
        {filters.map((filter, index) => (
          <FilterButton
            key={index}
            onClick={() => onClickFilterButton(filter)}
            $selected={selectedFilter === filter ? "true" : ""}
          >
            {filter}
          </FilterButton>
        ))}
      </ScrollableBox>
      <ScrollButton
        type="button"
        onClick={() => onClickScrollButton("next")}
        aria-label="탭 다음 버튼"
        className="next-button"
        disabled={nextDisabled}
      >
        <FiChevronRight className="icon" />
      </ScrollButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.125rem;
  width: 100%;
`;

const ScrollButton = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color.textColor};
  &:disabled {
    color: #919191;
    cursor: auto;
  }
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const ScrollableBox = styled.div`
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterButton = styled.button<{ $selected: "true" | "" }>`
  padding: 0.8rem;
  font-size: 1rem;
  text-transform: uppercase;
  transition: all 200ms ease 0s;
  ${({ $selected, theme }) =>
    $selected
      ? css`
          color: rgb(25, 118, 210);
          background-color: ${theme.color.tabSelectedBgColor};
          font-weight: 600;
          border-radius: 8px;
        `
      : css`
          color: ${theme.color.tabTextColor};
          font-weight: 500;
        `}
`;
