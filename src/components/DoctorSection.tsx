import { Star,  Award } from "lucide-react";
import { Smile } from "lucide-react";

const DoctorSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium bg-yellow-100 text-yellow-800 rounded-full">
            Trusted Physiotherapy Care
          </span>

          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            Unique Approach To Your <br /> <span className="text-physio-accent">Health Needs</span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-lg">
            Personalized physiotherapy programs designed to restore mobility,
            relieve pain, and improve quality of life through expert care.
          </p>

          {/* SMALL CARD */}
          <div className="mt-8 bg-[#EAF4EC] rounded-2xl p-6 flex gap-4 items-start max-w-md">
            <Award className="text-green-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">
                Expert Led Treatment
              </h4>
              <p className="text-sm text-gray-600 mt-1">
                Treatments supervised by Dr. Rajeev Khinchi (PhD, MPT, BPT)
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid grid-cols-2 grid-rows-3 gap-6 h-[400px] ">
  
  {/* LEFT COLUMN: TALL IMAGE (Top - Spans 2 rows) */}
  <div className="col-start-1 row-start-1 row-span-2 bg-[#648EC1] rounded-3xl overflow-hidden shadow-sm relative">
    <img
      src="/doctor.jpg"
      alt="Doctor"
      className="w-full h-full object-cover "
    />
  </div>

  {/* LEFT COLUMN: RATING (Bottom - Spans 1 row) */}
  <div className="col-start-1 row-start-3 bg-[#C9D6F7] rounded-2xl p-8 flex flex-col justify-center shadow-sm">
    <div className="flex items-center gap-2 mb-1">
      <span className="text-3xl font-bold  text-stone-800">4.9</span>
      <Star className="text-yellow-500 fill-yellow-500" size={24} />
    </div>
    <span className="text-gray-600 font-medium">Google Rating</span>
  </div>

  {/* RIGHT COLUMN: COUNT (Top - Spans 1 row) */}
 <div className="col-start-2 row-start-1 bg-[#F3E8FF] rounded-2xl p-7 flex flex-col justify-center shadow-sm relative">
  
  {/* ICON */}
  <div className="absolute top-5 left-5 w-10 h-10 rounded-full  flex items-center justify-center ">
    <Smile className="w-5 h-5 text-purple-600" />
  </div>

  <h3 className="text-3xl font-bold text-stone-800 mt-10">25K+</h3>
  <p className="text-gray-600  font-medium">Happy Patients</p>

</div>

  {/* RIGHT COLUMN: TALL IMAGE (Bottom - Spans 2 rows) */}
  <div className="col-start-2 row-start-2 row-span-2 bg-white rounded-3xl overflow-hidden shadow-sm relative">
    <img
      src="https://images.pexels.com/photos/7339489/pexels-photo-7339489.jpeg"
      alt="Patient Care"
      className="w-full h-full object-cover"
    />
  </div>

</div>


      </div>
    </section>
  );
};

export default DoctorSection;
