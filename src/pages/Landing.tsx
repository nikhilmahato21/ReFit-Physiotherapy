
import BookAppointment from '../components/BookAppointment';
import Conditions from '../components/Conditions';
import CTASection from '../components/CTASection';
import DoctorSection from '../components/DoctorSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PhysioBentoGrid from '../components/Services';
import Specialties from '../components/Specialties';
import Testimonials from '../components/Testimonials';
import WhyChooseUs from '../components/WhyChooseUs';
import { Phone} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "motion/react"
import AppointmentPopup from '../components/AppointmentPopup';


const Landing = () => {
  return (
    <div className="min-h-screen bg-physio-bg font-sans">
      <Header />

      <main>
        <AppointmentPopup/>
        <Hero />
<WhyChooseUs />
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
          
        </motion.section>


{/* <TrustedSection/> */}
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
     {/* Floating Action Buttons */}
<div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-7">

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/919461203939"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center
      w-14 h-14 rounded-full
      bg-green-500 hover:bg-green-600
      text-white shadow-lg
      transition-transform hover:scale-105"
    aria-label="WhatsApp"
  >
      <FaWhatsapp size={26} />
  </a>

  {/* Call Button with Ping Animation */}
  <a
    href="tel:+919461203939"
    className="relative flex items-center justify-center
      w-14 h-14 rounded-full
      bg-blue-600 hover:bg-blue-700
      text-white shadow-xl
      transition-transform hover:scale-105"
    aria-label="Call"
  >
    {/* Ping Animation */}
    <span className="absolute inline-flex h-full w-full rounded-full
      bg-blue-500 opacity-75 animate-ping" />

    {/* Solid Button */}
    <span className="relative flex items-center justify-center">
      <Phone size={22} />
    </span>
  </a>

</div>

    </div>
  )
}

export default Landing