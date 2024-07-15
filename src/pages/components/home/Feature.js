import slider1 from "../../../images/feature-1.webp";
import slider2 from "../../../images/feature-2.webp";
import slider3 from "../../../images/feature-3.webp";

export default function Feature() {
  return (
    <section className="feature fluid">
      <h3>As Featured In</h3>
      <div className="grid">
        <img src={slider1} alt="slider 1" />
        <img src={slider2} alt="slider 2" />
        <img src={slider3} alt="slider 3" />
      </div>
    </section>
  );
}
