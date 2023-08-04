import { useRef, useEffect } from "react";

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
    observer.observe(ref.current!);
    return () => {
      observer.unobserve(ref.current!);
    };
  }, [hasMore]);
  return (
    <>
      {children}
      <div ref={ref}></div>
    </>
  );
}
