
import Conditions from './components/Conditions';
import CTASection from './components/CTASection';
import DoctorSection from './components/DoctorSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Specialties from './components/Specialties';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <div className="min-h-screen bg-physio-bg font-sans">
      <Header />
      <main>
        <Hero />
        <Specialties/>
        <Conditions/>
        <DoctorSection/>
        <WhyChooseUs/>
        <Testimonials/>
        <CTASection/>
        <Footer/>
        {/* You can add the previous Specialty Section here if desired */}
      </main>
    </div>
  );
}

export default App;