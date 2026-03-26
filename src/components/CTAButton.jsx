import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTAButton = ({ children, to, primary = true, className = '' }) => {
  const baseClasses = `inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105 ${className}`;
  
  const primaryClasses = 'bg-blue-600 hover:bg-blue-700 text-white';
  const secondaryClasses = 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500';

  return (
    <Link to={to} className={`${baseClasses} ${primary ? primaryClasses : secondaryClasses}`}>
      {children}
      <ArrowRight className="ml-2 w-5 h-5" />
    </Link>
  );
};

export default CTAButton;