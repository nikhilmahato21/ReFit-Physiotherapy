import { InlineWidget } from "react-calendly";

const CalendlyEmbed = () => {
  return (
    <div className="w-full h-[700px] bg-white rounded-2xl overflow-hidden shadow-sm">
      <InlineWidget
        url="https://calendly.com/nikhilmahato3337/30min"
        styles={{ height: "700px" }}
      />
    </div>
  );
};

export default CalendlyEmbed;
