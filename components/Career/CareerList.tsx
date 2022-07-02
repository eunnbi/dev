import { CAREER } from "./career";
import CareerItem from "./CareerItem";

const CareerList = () => {
  return (
    <ol>
      {CAREER.map((career) => (
        <CareerItem
          key={career.id}
          title={career.title}
          content={career.content}
          period={career.period}
        />
      ))}
    </ol>
  );
};

export default CareerList;
