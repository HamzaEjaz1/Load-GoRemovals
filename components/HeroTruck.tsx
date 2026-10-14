import { Ute } from "./Truck";

export function HeroTruck() {
  return (
    <div className="road" aria-hidden="true">
      <div className="truck-track">
        <div className="truck-drive">
          <span className="puff p1" />
          <span className="puff p2" />
          <span className="puff p3" />
          <Ute className="hero-ute" animated />
          <span className="tyre-shadow" />
        </div>
      </div>
      <div className="roadbed">
        <div className="road-dashes" />
      </div>
    </div>
  );
}
