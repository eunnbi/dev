import { StyledGaugeBar, StyledGauge } from "./GaugeBar.styles";

function GaugeBar({ gauge }: { gauge: number }) {
  return (
    <StyledGaugeBar>
      <StyledGauge percent={gauge} />
    </StyledGaugeBar>
  );
}

export default GaugeBar;
