import { Link } from "react-router-dom";

export default function InvestorNetwork() {
  return (
    <section className="investor-network fluid">
      <h2>SINC Investors Network</h2>
      <p>
        Our deals are structured not just to take in investments but to onboard
        owners passionate about our solutions. Our portfolio companies are
        valued at $50k at start, with these low valuation, you are guaranteed at
        least 2x-5x, usually been the first to invest.
      </p>
      <p className="paragraph">
        <span>Disclaimer:</span> These deal flows is a statement of our
        projections and may differ from stage to stage and from venture to
        venture and the guarantee is for deal 1, usually the first to invest
      </p>
      <div className="inner">
        <p>
          <span>Micro Angel Investors & Service incubators</span> (Invest from
          $500 & above)
        </p>
        <div className="wrapper">
          <div className="grid">
            <div>
              <h4>Deal 1</h4>
              <p>
                ✓ Idea Stage: <span>$5k for 5% Equity</span> <br />✓ Expected
                Revenue at This Stage: <span>$0/mth</span> <br />✓ Duration of
                Raise: <span>1mth</span> <br />✓ Who Can Invest:{" "}
                <span>People with Domain Expertise and Advisors</span>
              </p>
            </div>
            <div>
              <h4>Deal 2</h4>
              <p>
                ✓ Build Stage: <span>$25k worth of service for 10% Equity</span>{" "}
                <br />✓ Expected Revenue at This Stage: <span>$100+/mth</span>{" "}
                <br />✓ Duration of Raise: <span>1-3mths</span> <br />✓ Who Can
                Invest: <span>Developers, Engineers, Growth Marketers</span>
              </p>
            </div>
            <div>
              <h4>Deal 3</h4>
              <p>
                ✓ Validation Stage: <span>$50k for 5% Equity</span> <br />✓
                Expected Revenue at This Stage: <span>$1k+/mth</span> <br />✓
                Duration of Raise: <span>3-6mths</span> <br />✓ Who Can Invest:{" "}
                <span>Everyone</span>
              </p>
            </div>
            <div>
              <h4>Deal 4</h4>
              <p>
                ✓ Traction Stage:{" "}
                <span>$125k worth of service for 5% Equity</span> <br />✓
                Expected Revenue at This Stage: <span>$5k+/mth</span> <br />✓
                Duration of Raise: <span>6-12mths</span> <br />✓ Who Can Invest:{" "}
                <span>Media, Influencers, Celebrity, Platform Owners</span>
              </p>
            </div>
          </div>
          <p>
            <span>Angel Investors & Venture Capital</span> (Invest from $50k and
            above)
          </p>
          <div className="grid">
            <div>
              <h4>Deal 5</h4>
              <p>
                ✓ Pre-seed Stage: <span>$1.5M for 10% Equity</span> <br />✓
                Expected Revenue at This Stage: <span>$50k+/mth</span> <br />✓
                Duration of Raise: <span>6-18mths</span> <br />✓ Who Can Invest:{" "}
                <span>Angel Investors, VCs, PE, Institutions</span>
              </p>
            </div>
            <div>
              <h4>Deal 6</h4>
              <p>
                ✓ Seed Stage: <span>$7.5M for 20% Equity</span> <br />✓ Expected
                Revenue at This Stage: <span>$250k+/mth</span> <br />✓ Duration
                of Raise: <span>12-24mths</span> <br />✓ Who Can Invest:{" "}
                <span>VCs, PE, Institutions</span>
              </p>
            </div>
            <div className="seven">
              <h4>Deal 7</h4>
              <p>
                ✓ IPO Stage: <span>$1.5B for 20% Equity</span> <br />✓ Expected
                Revenue at This Stage: <span>$1M+/mth</span> <br />✓ Duration of
                Raise: <span>18-36mths</span> <br />✓ Who Can Invest:{" "}
                <span>The Public</span>
              </p>
            </div>
            <div className="last">
              <div className="join">
                <p>
                  Work with Service Incubators (SINC) to expedite your <br />time to
                  market
                </p>
                <Link to="/sinc/join">Join SINC Network</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
