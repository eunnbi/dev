import Heading from "../common/Heading";
import CareerList from "./CareerList";

const CareerSection = () => {
  return (
    <section>
      <Heading level={2}>
        Career &amp; <span>Experience</span>
      </Heading>
      <CareerList />
    </section>
  );
};

export default CareerSection;
