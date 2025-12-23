
import BookAppointment from './components/BookAppointment';
import Conditions from './components/Conditions';
import CTASection from './components/CTASection';
import DoctorSection from './components/DoctorSection';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import PhysioBentoGrid from './components/Services';
import Specialties from './components/Specialties';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import { Phone } from "lucide-react";
import { motion } from "motion/react"


function App() {
  return (
    <div className="min-h-screen bg-physio-bg font-sans">
      <Header />

      <main>
        <Hero />

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Specialties />
        </motion.section>

        <PhysioBentoGrid />

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <Conditions />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <DoctorSection />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <WhyChooseUs />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Testimonials />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CTASection />
        </motion.section>
        <BookAppointment/>

        <Footer />
      </main>

      {/* Sticky Call Button */}
      <a
        href="tel:+919461203939"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-blue-600 hover:bg-blue-700
 text-white px-5 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all"
      >
        <Phone size={20} />
        <span className="font-semibold hidden sm:inline">
          Call Us
        </span>
      </a>
    </div>
  );
}

export default App;


