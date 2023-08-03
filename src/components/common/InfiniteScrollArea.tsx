import React, { useRef, useEffect } from "react";

interface InfiniteScrollAreaProps {
  hasMore?: boolean;
  next: () => Promise<any>;
}

export default function InfiniteScrollArea({
  children,
  next,
  hasMore
}: React.PropsWithChildren<InfiniteScrollAreaProps>) {
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
}
