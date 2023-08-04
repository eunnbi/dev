import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import { usePathname, useRouter } from "next/navigation";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface FilterProps {
  queryName: string;
  filters: string[];
  selectedFilter: Filter;
  defaultFilter: Filter;
}

export default function Filter({
  queryName,
  filters,
  selectedFilter,
  defaultFilter
}: FilterProps) {
  const pathname = usePathname();
  const router = useRouter();
  const scrollBoxRef = useRef<HTMLDivElement | null>(null);
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const moveScroll = (type: "prev" | "next") => {
    if (scrollBoxRef.current === null) return;
    if (type === "prev") {
      scrollBoxRef.current?.scrollTo({
        left: scrollLeft - scrollBoxRef.current.clientWidth,
        behavior: "smooth"
      });
      setScrollLeft(scrollLeft - scrollBoxRef.current.clientWidth);
    } else {
      scrollBoxRef.current?.scrollTo({
        left: scrollLeft + scrollBoxRef.current.clientWidth,
        behavior: "smooth"
      });
      setScrollLeft(scrollLeft + scrollBoxRef.current.clientWidth);
    }
  };
  const changeFilter = (value: Filter) => {
    const splitedPath = pathname!.split("?");
    const basePath = splitedPath[0];
    const params = new URLSearchParams(splitedPath[1]);
    params.delete(queryName);
    if (value !== defaultFilter) {
      params.append(queryName, value);
    }
    router.push(`${basePath}?${params}`);
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("prev-button")) {
              setScrollLeft(0);
            } else {
              setScrollLeft(scrollBoxRef.current!.clientWidth);
            }
          }
        });
      },
      {
        threshold: 1
      }
    );
    const nextButtonElem = nextButtonRef.current;
    const prevButtonElem = prevButtonRef.current;
    observer.observe(nextButtonElem!);
    observer.observe(prevButtonElem!);
    return () => {
      observer.unobserve(nextButtonElem!);
      observer.unobserve(prevButtonElem!);
    };
  }, []);
  return (
    <Wrapper>
      <ScrollButton
        type="button"
        onClick={() => moveScroll("prev")}
        aria-label="탭 이전 버튼"
        className="prev-button"
        disabled={scrollLeft === 0}
        ref={prevButtonRef}
      >
        <FiChevronLeft className="icon" />
      </ScrollButton>
      <ScrollableBox ref={scrollBoxRef}>
        {filters.map((filter, index) => (
          <FilterButton
            key={index}
            onClick={() => changeFilter(filter)}
            $selected={selectedFilter === filter ? "true" : ""}
          >
            {filter}
          </FilterButton>
        ))}
      </ScrollableBox>
      <ScrollButton
        type="button"
        onClick={() => moveScroll("next")}
        aria-label="탭 다음 버튼"
        className="next-button"
        disabled={scrollLeft === scrollBoxRef.current?.clientWidth}
        ref={nextButtonRef}
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
  &:disabled {
    color: lightgray;
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
  ${({ $selected }) =>
    $selected
      ? css`
          color: rgb(25, 118, 210);
          background-color: rgb(237, 237, 237);
          font-weight: 600;
          border-radius: 8px;
        `
      : css`
          color: rgb(110, 109, 122);
          font-weight: 500;
        `}
`;
