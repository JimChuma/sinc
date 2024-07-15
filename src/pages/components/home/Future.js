import { Link } from "react-router-dom";

export default function Future() {
  return (
    <section className="future fluid">
      <h2>Building the future together, democratizing success.</h2>
      <p>
        SINC Partners has a novel vision of making success available to everyone
        and democratizing the pain point of success. We are a next generation
        startup studio focus on building and supporting enterprises at scale and
        we help them raise service investments and funds across 3-5 deals from
        as low as $25k at start to up to $15m before you leave the lab. <br />We are a
        Gasus Business, a business built on the foundation of Christian values
        and belief.
      </p>
      <Link to="/sinc/future">Read About Us</Link>
    </section>
  );
}
