"use client";

import { MouseEventHandler, useEffect, useRef, useState } from "react";
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
  const [prevDisabled, setPrevDisabled] = useState(false);
  const [nextDisabled, setNextDisabled] = useState(false);
  const scrollBoxRef = useRef<HTMLDivElement | null>(null);
  const filterButtonRefList = useRef<(HTMLButtonElement | null)[]>(
    Array(filters.length).fill(null)
  );
  const { scrollLeft, setScrollState } = useScrollStore();
  const onClickScrollButton =
    (type: "prev" | "next"): MouseEventHandler =>
    e => {
      if (scrollBoxRef.current === null) return;
      if (type === "prev") {
        setScrollState({
          scrollLeft: scrollLeft - scrollBoxRef.current.clientWidth - 1
        });
      } else {
        setScrollState({
          scrollLeft: scrollLeft + scrollBoxRef.current.clientWidth + 1
        });
      }
    };
  const onClickFilterButton =
    (filter: Filter): MouseEventHandler =>
    e => {
      e.currentTarget.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      changeFilter(filter);
      setScrollState({ scrollLeft: scrollBoxRef.current!.scrollLeft });
    };

  useEffect(() => {
    const options = {
      root: scrollBoxRef.current!,
      threshold: 0.8
    };
    const filterButtonObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting && entry.target.ariaSelected === "true") {
          scrollBoxRef.current!.scrollTo({
            left:
              entry.boundingClientRect.x -
              (entry.rootBounds!.right - entry.rootBounds!.left) / 2
          });
        }
        if (entry.target.classList.contains("0")) {
          if (entry.isIntersecting) {
            setPrevDisabled(true);
          } else {
            setPrevDisabled(false);
          }
        }
        if (entry.target.classList.contains((filters.length - 1).toString())) {
          if (entry.isIntersecting) {
            setNextDisabled(true);
          } else {
            setNextDisabled(false);
          }
        }
      });
    }, options);
    filterButtonRefList.current.forEach(ref => {
      filterButtonObserver.observe(ref!);
    });
    () => {
      filterButtonObserver.disconnect();
    };
  }, []);
  useEffect(() => {
    scrollBoxRef.current!.scrollTo({
      left: scrollLeft,
      behavior: "smooth"
    });
  }, [scrollLeft]);
  return (
    <Wrapper>
      <ScrollButton
        type="button"
        onClick={onClickScrollButton("prev")}
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
            onClick={onClickFilterButton(filter)}
            ref={(el: HTMLButtonElement) =>
              (filterButtonRefList.current[index] = el)
            }
            className={index.toString()}
            aria-selected={selectedFilter === filter}
            $selected={selectedFilter === filter ? "true" : ""}
          >
            {filter}
          </FilterButton>
        ))}
      </ScrollableBox>
      <ScrollButton
        type="button"
        onClick={onClickScrollButton("next")}
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
  align-items: center;
  gap: 0.125rem;
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
          color: ${theme.color.primaryBlue};
          background-color: ${theme.color.primaryLightGrayBlue};
          font-weight: 600;
          border-radius: 8px;
        `
      : css`
          color: ${theme.color.primaryGray};
          font-weight: 500;
        `}
`;
