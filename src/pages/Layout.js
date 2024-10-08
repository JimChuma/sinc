import { Link, Outlet } from "react-router-dom";
import logo from "../icons/SINC LOGO black outline 1.svg";
import logoWhite from "../icons/SINC LOGO white outline 1.svg";
import flag from "../icons/nigeria flag.svg";
import trustB from "../icons/trusted business.svg";
import whatsapp from "../icons/whatsapp.svg";
import logoGasus from "../icons/GASUS white SVG-01 1.svg"
import fackbook from "../icons/Facebook Icon.svg";
import twitter from "../icons/Twitter Icon.svg";
import instagram from "../icons/Instagram Icon.svg";
import linkedIn from "../icons/LinkedIn Icon.svg";
import social1 from "../icons/social-icon-1.svg";
import youtube from "../icons/YouTube Icon.svg";
import social2 from "../icons/social-icon-2.png";
import menu from "../icons/menu.svg"

export default function Layout() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <nav className="fluid">
        <div className="container">
          <div className="inner">
            <div className="list">
              <Link to="/sinc">
                <img src={logo} alt="sinc logo" />
              </Link>
              <ul>
                <li>
                  <Link to="/sinc/about">About</Link>
                </li>
                <li>
                  <Link to="/sinc/sip">SIP</Link>
                </li>
                <li>
                  <Link to="/sinc/studio">Studio</Link>
                </li>
                <li>
                  <Link to="/sinc/seeq">SEEQ</Link>
                </li>
                <li>
                  <Link to="/sinc/platforms">Platforms</Link>
                </li>
                <li>
                  <Link to="/sinc/initiatives">Initiatives</Link>
                </li>
                <li>
                  <Link to="/sinc/more">More</Link>
                </li>
              </ul>
            </div>
            <div className="action">
              <Link to="/sinc/sign-up" className="btn-one">
                SINC With Us
              </Link>
              <Link to="/sinc/apply" className="btn-two">
                Apply to SIP 1.0
              </Link>
            </div>
            <div className="mobile">
              <img src={menu} alt="menu icon" />
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
      <footer className="fluid">
        <div className="container">
          <div className="top">
            <h2>Newsletter</h2>
            <p>
              Get the latest about SINC Partners, our startup Incubator program,
              Portfolio company offerings - straight into your inbox.
            </p>
            <form action="/submit">
              <input type="text" placeholder="Enter your email address" />
              <button>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="fluid middle">
          <div className="container">
            <div className="grid">
              <div>
                <Link to="/sinc">
                  <img src={logoWhite} alt="sinc logo" />
                </Link>
                <p>
                  SINC Partners is a service incubation company connecting
                  experts in product development and growth marketing willing to
                  offer their services to amazing startups in exchange <br />
                  for minute equity (usually <br />
                  0.5% to 2%)
                </p>
              </div>
              <div className="links">
                <Link to="/sinc/platforms">Platforms</Link>
                <div>
                  <Link to="/sinc/platforms">Kofoundme</Link>
                  <Link to="/sinc/platforms">InResidency</Link>
                  <Link to="/sinc/platforms">Service Market</Link>
                  <Link to="/sinc/platforms">Founders School</Link>
                  <Link to="/sinc/platforms">Metty</Link>
                  <Link to="/sinc/platforms">Grantty</Link>
                  <Link to="/sinc/platforms">Boldtell</Link>
                  <Link to="/sinc/platforms">Chekwa</Link>
                </div>
              </div>
              <div className="links">
                <Link to="/sinc/initiatives">Initiatives</Link>
                <div>
                  <Link to="/sinc/initiatives">Jabi Plains</Link>
                  <Link to="/sinc/initiatives">Local Pricing Initiative</Link>
                  <Link to="/sinc/initiatives">Scholarship Program</Link>
                  <Link to="/sinc/initiatives">SSMN Pricing</Link>
                  <Link to="/sinc/initiatives">University STEM</Link>
                  <Link to="/sinc/initiatives">University InResidency</Link>
                  <Link to="/sinc/initiatives" className="flag-link">
                    1M Nigeria <img src={flag} alt="Nigerian flag" /> Products
                  </Link>
                  <Link to="/sinc/initiatives">Founders Festival</Link>
                </div>
              </div>
              <div className="links">
                <Link to="/sinc/about">About Us</Link>
                <div>
                  <Link to="/sinc/about">Who We Are</Link>
                  <Link to="/sinc/about">Our People</Link>
                  <Link to="/sinc/about">Concept Innovations</Link>
                  <Link to="/sinc/about">Our Process</Link>
                  <Link to="/sinc/about">Investors Network</Link>
                  <Link to="/sinc/about">CSR & Events</Link>
                  <Link to="/sinc/about">Career</Link>
                  <Link to="/sinc/about">Contact</Link>
                </div>
              </div>
              <div className="links">
                <Link to="/sinc/more">More</Link>
                <div>
                  <Link to="/sinc/more">Services</Link>
                  <Link to="/sinc/more">Equity Jobs</Link>
                  <Link to="/sinc/more">EIR Program</Link>
                  <Link to="/sinc/more">Offers</Link>
                  <Link to="/sinc/more">Innovation News</Link>
                  <Link to="/sinc/more">FAQ</Link>
                  <Link to="/sinc/more">Blog & Resources</Link>
                  <Link to="/sinc/more">Press</Link>
                </div>
              </div>
            </div>
            <div className="address">
              <div className="trust">
                <div>
                  <h4>Locations</h4>
                  <span>Abuja, Nigeria</span>
                  <span>Lagos, Nigeria</span>
                  <span>Philadelphia, USA</span>
                </div>
                <img src={trustB} alt="trusted business" />
              </div>
              <div className="whatsapp">
                <img src={whatsapp} alt="whatsapp" />
              </div>
            </div>
          </div>
        </div>
        <div className="fluid bottom">
          <div className="container inner">
            <div className="left">
              <p>
                Guaranteed 2x on your service or cash investment, usually been
                the first to invest.{" "}
                <span>Get in early and SINC your guaranty!</span>
              </p>
              <div className="right">
              <div>
                <img src={logoGasus} alt="gasus logo" />
                <p>
                  We are a business built on the foundation of Christian values
                  and belief
                </p>
              </div>
              <div>
                <img src={fackbook} alt="facebook icon" />
                <img src={twitter} alt="twitter icon" />
                <img src={instagram} alt="instagram icon" />
                <img src={linkedIn} alt="linkedin icon" />
                <img src={social1} alt="social icon 1" />
                <img src={youtube} alt="youtube icon" />
                <img src={social2} alt="social icon 2" />
              </div>
            </div>
              <div className="wrapper">
                <span>
                  © {currentYear} SINC Partners Ltd. All rights reserved
                </span>
                <div>
                  <Link to="/sinc/privacy-policy ">Privacy Policy</Link>
                  <Link to="/sinc/privacy-policy ">Terms of Service</Link>
                  <Link to="/sinc/privacy-policy ">Security</Link>
                </div>
              </div>
            </div>
            <div className="right">
              <div>
                <img src={logoGasus} alt="gasus logo" />
                <p>
                  We are a business built on the foundation of Christian values
                  and belief
                </p>
              </div>
              <div>
                <img src={fackbook} alt="facebook icon" />
                <img src={twitter} alt="twitter icon" />
                <img src={instagram} alt="instagram icon" />
                <img src={linkedIn} alt="linkedin icon" />
                <img src={social1} alt="social icon 1" />
                <img src={youtube} alt="youtube icon" />
                <img src={social2} alt="social icon 2" />
              </div>
            </div>
          </div>
          <div className="container make">
            <span>Web In Nigeria <img src={flag} alt="nigerian flag" /></span>
          </div>
        </div>
      </footer>
    </>
  );
}
