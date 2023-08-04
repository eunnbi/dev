import { useSearchParams } from "next/navigation";

export const usePostCategory = () => {
  const searchParams = useSearchParams();
  let category = "All";
  if (searchParams !== null) {
    category = searchParams.get("category") || "All";
  }
  return category;
};
