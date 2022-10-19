import { CAREER } from "@data/career";
import CareerItem from "./CareerItem";

const CareerList = () => {
  return (
    <ol>
      {CAREER.map((career) => (
        <CareerItem
          key={career.id}
          content={career.content}
          period={career.period}
        />
      ))}
    </ol>
  );
};

export default CareerList;
