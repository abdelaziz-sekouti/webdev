import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, content, rating = 5, image, delay = 0 }) => {
  return (
    <div 
      className="animate-on-scroll bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-slate-300'}`}
          />
        ))}
      </div>
      <p className="text-slate-600 dark:text-slate-400 mb-6 italic">
        "{content}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 dark:text-white">{name}</h4>
          <p className="text-sm text-slate-500 dark:text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;