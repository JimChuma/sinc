import { Link } from "react-router-dom";

export default function Succeed() {
    return <section className="succeed fluid">
        <h2>Let's build companies that help everyone succeed</h2>
        <div>
            <Link to="/sinc">SINC With Us</Link>
            <Link to="/apply">Apply to SIP 1.0</Link>
        </div>
    </section>
}