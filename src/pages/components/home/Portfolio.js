import { Link } from "react-router-dom";
import arrow from "../../../icons/down-right 1.svg";
import company1 from "../../../icons/company-1.png";
import company2 from "../../../icons/company-2.png";
import company3 from "../../../icons/company-3.png";
import company4 from "../../../icons/company-4.png";
import company5 from "../../../icons/company-5.png";
import company6 from "../../../icons/company-6.png";
import company7 from "../../../icons/company-7.png";
import company8 from "../../../icons/company-8.png";
import company9 from "../../../icons/company-9.png";
import company10 from "../../../icons/company-10.png";
import company11 from "../../../icons/company-11.png";
import company12 from "../../../icons/company-12.png";
import company13 from "../../../icons/company-13.png";
import company14 from "../../../icons/company-14.png";
import company15 from "../../../icons/company-15.png";
import company16 from "../../../icons/company-16.png";
import company17 from "../../../icons/company-17.png";
import company18 from "../../../icons/company-18.png";
import company19 from "../../../icons/company-19.png";
import company20 from "../../../icons/company-20.png";
import company21 from "../../../icons/company-21.png";
import company22 from "../../../icons/company-22.png";
import company23 from "../../../icons/company-23.png";
import company24 from "../../../icons/company-24.png";
import company25 from "../../../icons/company-25.png";
import company26 from "../../../icons/company-26.png";
import company27 from "../../../icons/company-27.png";
import company28 from "../../../icons/company-28.png";
import company29 from "../../../icons/company-29.png";
import company30 from "../../../icons/company-30.png";
import company31 from "../../../icons/company-31.png";
import company32 from "../../../icons/company-32.png";
import company33 from "../../../icons/company-33.png";
import company34 from "../../../icons/company-34.png";
import company35 from "../../../icons/company-35.png";
import company36 from "../../../icons/company-36.png";
import company37 from "../../../icons/company-37.png";
import company38 from "../../../icons/company-38.png";
import company39 from "../../../icons/company-39.png";
import company40 from "../../../icons/company-40.png";
import Company from "./sub-components/Company";

export default function Portfolio() {
  const imageData = [
    company1,
    company2,
    company3,
    company4,
    company5,
    company6,
    company7,
    company8,
    company9,
    company10,
    company11,
    company12,
    company13,
    company14,
    company15,
    company16,
    company17,
    company18,
    company19,
    company20,
    company21,
    company22,
    company23,
    company24,
    company25,
    company26,
    company27,
    company28,
    company29,
    company30,
    company31,
    company32,
    company33,
    company34,
    company35,
    company36,
    company37,
    company38,
    company39,
    company40,
  ];
  return (
    <section className="portfolio fluid">
      <h2>Our Studio Portfolio</h2>
      <p>Our 2024 Service Incubator Portfolio Companies</p>
      <div className="grid">
        {imageData.map((item, index) => {
            return <Company key={"KC" + index} imgSrc={item} altTag={"company-" + index}/>
        })}
      </div>
      <Link to="/companies" className="action">
        View All Companies <img src={arrow} alt="down-right arrow" />
      </Link>
    </section>
  );
}
