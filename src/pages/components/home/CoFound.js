import { Link } from "react-router-dom";
import arrow from "../../../icons/down-right 1.svg";

export default function CoFound() {
  return (
    <section className="co-found fluid">
      <h2>Co-found With Us</h2>
      <p>
        We seek to collaborate with visionary individuals who are solving
        similar problems of helping entrepreneurs succeed
      </p>
      <div className="grid">
        <div>
          <span className="one">1</span>
          <h3>We Ideate</h3>
          <p>
            We internally generate concepts and ideas that help solve problems
            in our thesis areas, after which we proceed to develop a nano/micro
            MVP (usually having as low as 30 functions to as high as 100
            functions) of the product that we take to the market.
          </p>
        </div>
        <div>
          <span className="two">2</span>
          <h3>You Validate</h3>
          <p>
            You join our 3 months inResidence program as a business expert to
            run the operations or as a technical expert to further the
            development and validate the idea with an average monthly revenue of
            $1k or 10,000 users and/or an MVP of at least 150 functions
          </p>
        </div>
        <div>
          <span className="three">3</span>
          <h3>You Co-own</h3>
          <p>
            After successful validation and demo day at the end of the EIR
            program, we move those with perfect fit to become co-founders of the
            product they validated as CEO & CTO, each owning 20% of the venture.
          </p>
        </div>
      </div>
      <Link to="/sinc/build" className="action">
        Build your dream <img src={arrow} alt="down-right arrow" />
      </Link>
    </section>
  );
}
