const BookAppointment = () => {
  return (
    <section id="book" className="py-24 bg-[#F5F1E8]">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900">
            Book a <span className="text-indigo-600">Free Strategy Call</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Schedule a 30-minute consultation with our marketing experts.
            No sales pressure. Just clarity.
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              What we’ll discuss
            </h3>

            <ul className="space-y-4 text-gray-600">
  <li>✔️ Injury evaluation & biomechanical analysis</li>
  <li>✔️ Pain management and performance limitations</li>
  <li>✔️ Sports-specific rehabilitation planning</li>
  <li>✔️ Return-to-activity roadmap</li>
</ul>

            <div className="pt-4">
              <p className="text-sm text-gray-500">
                📅 Duration: 30 minutes <br />
                🎥 Google Meet (link sent after booking)
              </p>
            </div>
          </div>

          {/* RIGHT: GOOGLE CALENDAR EMBED */}
          <div className="rounded-2xl overflow-x-auto border border-gray-200">
         <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ31WsfTVpimU1XtbQL8c1SB0MvZrh6HjrRYZjv3M9hxT9QAg21pTyoY1VPpqCqYY3iP5qY62zOQ?gv=true"  width="100%" height="400" ></iframe>
          </div>

        </div>

        {/* TRUST TEXT */}
        <p className="text-center text-sm text-gray-500 mt-6">
          🔒 Your information is safe. No spam. No obligations.
        </p>
      </div>
    </section>
  );
};

export default BookAppointment;
