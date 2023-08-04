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
    const instance = ref.current;
    observer.observe(instance!);
    return () => {
      observer.unobserve(instance!);
    };
  }, [hasMore]);
  return (
    <>
      {children}
      <div ref={ref}></div>
    </>
  );
}
