
import type { SpecialtyItem } from '../data/specialties';


interface Props {
    data: SpecialtyItem;
}

const SpecialtyCard: React.FC<Props> = ({ data }) => {
  return (
    <div className="bg-physio-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <img 
            src={data.imageUrl} 
            alt={data.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-physio-text/50 to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{data.title}</h3>
      </div>
      
      <div className="p-6 grow flex flex-col">
        <p className="text-gray-600 mb-6 italic">{data.description}</p>
        
        <div className="mt-auto">
            <h4 className="font-semibold text-physio-text mb-3 uppercase text-sm tracking-wider">Conditions Treated:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
            {data.conditions.map((condition, index) => (
                <li key={index} className="flex items-center text-gray-700 text-sm">
                <span className="h-2 w-2 rounded-full bg-physio-accent mr-2"></span>
                {condition}
                </li>
            ))}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecialtyCard;