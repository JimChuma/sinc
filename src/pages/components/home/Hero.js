import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <header className="fluid">
      <div className="inner">
        <div className="text">
          <h2>SINC Partners is a service incubation company</h2>
          <p>
            Connecting experts in product development and growth marketing
            willing to offer their services to amazing startups in exchange for
            minute equity (usually 0.5% to 2%).
          </p>
          <Link to="/sinc">SINC With Us</Link>
        </div>
      </div>
      <div className="background-image"></div>
    </header>
  );
}
