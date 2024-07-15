import { Link } from "react-router-dom";
import arrow from "../../../icons/down-right 1.svg";
import work1 from "../../../icons/work-1.svg";
import work2 from "../../../icons/work-2.svg";
import work3 from "../../../icons/work-3.svg";
import leftButton from "../../../icons/left arrow button.svg";
import rightButton from "../../../icons/right arrow button.svg";

export default function HowItWorks() {
  return (
    <section className="how-it-works fluid">
      <h2>How It Works</h2>
      <p>
        Our EIR program is our structured 3 months un-paid program designed to
        help us have a pipeline of business and technical cofounders who can run
        the venture of choice as CEO & CTO owning 20% equity each.
      </p>
      <h2>Service Incubation Process</h2>
      <div className="grid">
        <div>
          <img src={work1} alt="application icon" />
          <h3>Application and Selection</h3>
          <p className="top">
            Begin your journey by completing our straightforward application
            form. Share insights into your entrepreneurial background,
            expertise, and your vision for supporting the success of our
            portfolio companies.
          </p>
          <p>
            Our dedicated selection committee, comprised of key stakeholders at
            SINC Partners, will carefully review your application.
          </p>
        </div>
        <div>
          <img src={work2} alt="meeting icon" />
          <h3>Alignment Meeting and Proposal Submission</h3>
          <p className="top">
            If your application stands out, we'll invite you to an alignment
            meeting. This is an opportunity to discuss the goals of our EIR
            program and explore how your expertise aligns with the needs of our
            portfolio companies.
          </p>
          <p>
            Following the alignment meeting, submit a formal proposal outlining
            your intended contributions and how you envision adding significant
            value to our portfolio companies.
          </p>
        </div>
        <div>
          <img src={work3} alt="agreement icon" />
          <h3>Negotiation and Agreement</h3>
          <p className="top">
            Upon successful alignment and proposal review, we'll engage in
            discussions to finalize the terms of your EIR role. This includes
            the duration, expectations, and any compensation or equity
            arrangements.
          </p>
          <p>
            Once terms are agreed upon, we'll draft a formal agreement outlining
            the specifics of your EIR engagement, including reporting
            structures, responsibilities, and the support/resources provided by
            SINC Partners.
          </p>
        </div>
      </div>
      <Link to="/support" className="action">
        Support the Future <img src={arrow} alt="down-right arrow" />
      </Link>
      <div className="button">
        <img src={leftButton} alt="left arrow buttom" />
        <img src={rightButton} alt="right arrow buttom" />
      </div>
    </section>
  );
}
