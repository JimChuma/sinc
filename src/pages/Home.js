import AreaFocus from "./components/home/AreaFocus";
import CoFound from "./components/home/CoFound";
import Concept from "./components/home/Concept";
import EquityJob from "./components/home/EquityJob";
import Feature from "./components/home/Feature";
import Future from "./components/home/Future";
import Hero from "./components/home/Hero";
import HowItWorks from "./components/home/HowItWorks";
import Incubation from "./components/home/Incubation";
import InvestorNetwork from "./components/home/InvestorNetwork";
import NetworkBuild from "./components/home/NetworkBuild";
import Portfolio from "./components/home/Portfolio";
import Quote from "./components/home/Quote";
import Resource from "./components/home/Resource";
import Succeed from "./components/home/Succeed";

export default function Home() {
  return (
    <div className="homepage">
      <Hero />
      <Quote />
      <NetworkBuild />
      <Future />
      <AreaFocus />
      <Concept />
      <Incubation />
      <Portfolio />
      <CoFound />
      <HowItWorks />
      <InvestorNetwork  />
      <EquityJob />
      <Resource />
      <Feature />
      <Succeed />
    </div>
  );
}
