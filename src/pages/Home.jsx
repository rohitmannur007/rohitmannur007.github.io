import SideRail from '../components/SideRail';
import ProcessRail from '../components/ProcessRail';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import SelectedWork from '../components/SelectedWork';
import Research from '../components/Research';
import Lab from '../components/Lab';
import Experience from '../components/Experience';
import Principles from '../components/Principles';
import Education from '../components/Education';
import ResumeSection from '../components/ResumeSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <SideRail />
    <div className="xl:pl-[380px]">
      <ProcessRail />
      <main>
        <Hero />
        <Marquee />
        <SelectedWork />
        <Research />
        <Lab />
        <Experience />
        <Principles />
        <Education />
        <ResumeSection />
        <Contact />
      </main>
      <Footer />
    </div>
  </>
);

export default Home;
