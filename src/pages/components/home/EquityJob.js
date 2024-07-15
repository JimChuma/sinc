import { Link } from "react-router-dom";
import job1 from "../../../icons/job-1.png";
import job2 from "../../../icons/job-2.png";
import job3 from "../../../icons/job-3.png";
import job4 from "../../../icons/job-4.png";
import EquityCard from "./sub-components/EquityCard";
import arrow from "../../../icons/down-right 1.svg";

export default function EquityJob() {
  const jobData = [
    {
      image: job1,
      altDescribe: "skimake job icon",
      position: "Chief Executive Officer",
      industry: "On-demand print",
      url: "skimake",
    },
    {
      image: job2,
      altDescribe: "kreeca job icon",
      position: "UX Strategist",
      industry: "E-commerce",
      url: "kreeca",
    },
    {
      image: job3,
      altDescribe: "krowdback job icon",
      position: "CTO & Head of innovations",
      industry: "Fintech",
      url: "krowdback",
    },
    {
      image: job4,
      altDescribe: "wettaa job icon",
      position: "Backend Developer",
      industry: "Transportation",
      url: "skimake",
    },
  ];
  return (
    <section className="equity-job fluid">
      <div>
        <h2>Equity jobs</h2>
        <p>
          See companies and startups offering equity or a mix of cash and equity
          for very important position in their company
        </p>
      </div>
      <div className="grid">
        {jobData.map((item) => {
          return (
            <EquityCard
              key={item.url}
              imgSrc={item.image}
              altTag={item.altDescribe}
              position={item.position}
              industry={item.industry}
              url={item.url}
            />
          );
        })}
      </div>
      <Link to="/sinc/jobs" className="action">
        See More Equity Jobs <img src={arrow} alt="down-right arrow" />
      </Link>
    </section>
  );
}
