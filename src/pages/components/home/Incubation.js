import triangle from "../../../icons/triangle.svg";
import square from "../../../icons/square.svg";
import pentagon from "../../../icons/pentagon.svg";
import arrow from "../../../icons/down-right 1.svg";
import { Link } from "react-router-dom";

export default function Incubation() {
  return (
    <section className="incubation fluid">
      <h2>Our Service Incubation Model</h2>
      <p>
        The Service Incubation model is an alternate funding model for startup
        that allows professionals to offer their services to startups in return
        for a minute equity (usually between 0.5% to 1.5%) in the startup. As a
        service incubator, you will see your share grow as much as 1000% in 12 -
        24 months as been first to invest.
      </p>
      <div className="inner">
        <div className="upper">
          <h3>Hypothesis</h3>
          <p>
            Just a few reasons we know its time for this model within the
            ecosystem
          </p>
          <div className="grid">
            <div>
              <img src={triangle} alt="triangle shape" />
              <p>
                Most early-stage companies and pre-product startups cannot
                afford professional services especially those who don’t have
                family and friends' network that can support
              </p>
            </div>
            <div>
              <img src={square} alt="square shape" />
              <p>
                If startups can seed 5-10% in equity to incubators for $20k to
                $200k funding most times, they will be willing to seed 10%
                equity for a $25k service investment
              </p>
            </div>
            <div>
              <img src={pentagon} alt="pentagon shape" />
              <p>
                Young professionals who don't have a lot of money to invest nor
                an accredited investors will have opportunities to take equity
                at the early stage of their career, usually been the first to
                invest and almost guaranteed of return
              </p>
            </div>
          </div>
        </div>
        <div className="lower">
          <h3>Case Study</h3>
          <p>
            See what Service Incubators get, the maths behind Service Equity
            (SEEQ) and what the value of your share equity can be over time
          </p>
          <div className="grid">
            <Link to="/case-study-one">Service Incubator Equity</Link>
            <Link to="/case-study-two">SEEQ Maths Equation</Link>
            <Link to="/case-study-three">Value of my Equity Over Time</Link>
          </div>
        </div>
      </div>
      <Link to="/service-incubator" className="action">
        Become A Service Incubator <img src={arrow} alt="down-right arrow" />
      </Link>
    </section>
  );
}
