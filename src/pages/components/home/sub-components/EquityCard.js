import { Link } from "react-router-dom";

export default function EquityCard({ imgSrc, altTag, position, industry, url }) {
  return (
    <div className="wrapper">
      <img src={imgSrc} alt={altTag} />
      <p>This company is a SAAS Startup that builds AI copy generator...</p>
      <h4>{position}</h4>
      <div className="inner">
        <div className="left">
          <span className="property">LOCATION</span>
          <span className="value">Abuja, Nigeria</span>
        </div>
        <div className="right">
          <span className="property">INDUSTRY</span>
          <span className="value">{industry}</span>
        </div>
        <div className="left">
          <span className="property">EQUITY</span>
          <span className="value">1.2%</span>
        </div>
        <div className="right">
          <span className="property">STIPEND</span>
          <span className="value">NGN 200,000/mth</span>
        </div>
        <div className="left">
          <span className="property">DEADLINE</span>
          <span className="value">24th, January 2024</span>
        </div>
        <div className="right">
          <span className="property">ROLE TYPE</span>
          <span className="value">Full-time</span>
        </div>
      </div>
      <Link to={"/sinc/" + url }>View Details</Link>
    </div>
  );
}
