import Hero from '@/components/Sections/Hero';
import About from '@/components/Sections/About';
import Services from '@/components/Sections/Services';
import Fleet from '../../components/Sections/Fleet';
import Experience from '../../components/Sections/Experience';
import Program from '../../components/Sections/Program';
import Discovery from '../../components/Sections/Discovery';
import Reviews from '../../components/Sections/Reviews';
import Contact from '../../components/Sections/Contact';
import FAQ from '../../components/Sections/FAQ';
// Footer is now imported inside Contact

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Fleet />
      <Experience />
      <Program />
      <Discovery />
      {/* <Reviews /> */}
      <FAQ />
      <Contact />
    </>
  );
}
