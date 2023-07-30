import React, { useRef, useEffect } from "react";

interface Props {
  hasMore?: boolean;
  next: () => Promise<any>;
}

const InfiniteScrollArea = ({
  children,
  next,
  hasMore
}: React.PropsWithChildren<Props>) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasMore) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          next();
        }
      });
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasMore, ref.current]);
  return (
    <>
      {children}
      <div ref={ref}></div>
    </>
  );
};

export default InfiniteScrollArea;
