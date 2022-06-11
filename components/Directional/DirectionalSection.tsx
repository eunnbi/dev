import Heading from "../common/Heading";
import DirectionalList from "./DirectionalList";

const DirectionalSection = () => {
  return (
    <section>
      <Heading level={2}>
        My <span>Directional</span>
      </Heading>
      <DirectionalList />
    </section>
  );
};

export default DirectionalSection;
