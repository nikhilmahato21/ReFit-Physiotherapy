import { Star,  Award, CheckCircle, Dumbbell } from "lucide-react";
import { Smile } from "lucide-react";
import { AwardsSlider } from "./AwardsSlider";

const DoctorSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="text-center flex flex-col items-center">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full">
            Trusted Physiotherapy Clinic
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
            Proven Care for Your <br />
            <span className="text-physio-accent">Pain-Free Life</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-lg mx-auto">
            Evidence-based physiotherapy programs designed to relieve pain,
            restore movement, and help you return to daily life with confidence.
          </p>

          {/* EXPERT CARD */}
          <div className="mt-8 bg-[#EAF4EC] rounded-2xl p-6 flex flex-col items-center text-center max-w-md">
            <Award className="text-green-600 mb-3" />

            <h4 className="font-semibold text-gray-900">
              Expert-Led Treatment
            </h4>

            <p className="text-xs sm:text-sm text-gray-600 mt-1 px-12">
              Treatments supervised by <br className="sm:hidden" />
              Dr. Rajeev Khinchi (PhD, MPT, BPT)
            </p>
          </div>
        </div>

        {/* RIGHT: STATS GRID */}
        <div className="grid grid-cols-2 gap-6">

          {/* HAPPY PATIENTS */}
          <div className="bg-[#F3E8FF] rounded-2xl p-8 text-center shadow-sm">
            <Smile className="mx-auto mb-3 text-purple-600" />
            <h3 className="text-2xl sm:text-4xl  font-bold text-stone-800">25k</h3>
            <p className="text-gray-600 font-medium mt-1">
              Happy Patients
            </p>
          </div>

          {/* GOOGLE RATING */}
          <div className="bg-[#FFF7E6] rounded-2xl p-8 text-center shadow-sm">
            <Star className="mx-auto mb-3 text-yellow-500 fill-yellow-500" />
            <h3 className="text-2xl sm:text-4xl font-bold text-stone-800">4.9 / 5</h3>
            <p className="text-gray-600 font-medium mt-1">
              Google Rating
            </p>
          </div>

          {/* YEARS OF EXPERIENCE */}
          <div className="bg-[#E8F3FF] rounded-2xl p-8 text-center shadow-sm">
            <CheckCircle className="mx-auto mb-3 text-blue-600" />
            <h3 className="text-2xl sm:text-4xl  font-bold text-stone-800">10+</h3>
            <p className="text-gray-600 font-medium mt-1">
              Years of Experience
            </p>
          </div>

          {/* SUCCESS RATE */}
          <div className="bg-[#EAF4EC] rounded-2xl p-8 text-center shadow-sm">
            <Dumbbell className="mx-auto mb-3 text-green-600" />
            <h3 className="text-2xl sm:text-4xl font-bold text-stone-800">95%</h3>
            <p className="text-gray-600 font-medium mt-1">
              Recovery Success
            </p>
          </div>

        </div>
      </div>

      {/* AWARDS & ACHIEVEMENTS */}
      <div className="mt-28 text-center">
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Awards & Recognitions
        </h3>

        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Honored for excellence in physiotherapy, research, and patient care.
        </p>

        <AwardsSlider />
      </div>
    </section>
  );
};


export default DoctorSection;
