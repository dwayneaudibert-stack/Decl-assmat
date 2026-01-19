import React from 'react';
import { Baby, ShieldCheck, ArrowRight, UserPlus } from 'lucide-react';
import Logo from './Logo';

interface LoginViewProps {
  onLogin: (role: 'parent' | 'nanny') => void;
  onGoToRegister: () => void;
  onShowLegal: () => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin, onGoToRegister, onShowLegal }) => {
  return (
    <div className="min-h-screen bg-[#fffafa] flex flex-col items-center justify-center p-6">
      <div className="text-center mb-12">
        <Logo size={100} className="text-rose-500 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-slate-900">Décl’assmat</h1>
        <p className="text-slate-500">La gestion simplifiée pour nounous et parents.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl w-full">
        <button onClick={() => onLogin('nanny')} className="p-8 bg-white rounded-[2.5rem] shadow-xl border-2 border-transparent hover:border-rose-200 transition-all text-left">
           <ShieldCheck className="text-rose-500 mb-4" size={32} />
           <h3 className="text-xl font-bold mb-2">Je suis une Assmat</h3>
           <p className="text-sm text-slate-500">Gérez vos contrats et planning.</p>
        </button>
        <button onClick={() => onLogin('parent')} className="p-8 bg-white rounded-[2.5rem] shadow-xl border-2 border-transparent hover:border-blue-200 transition-all text-left">
           <Baby className="text-blue-500 mb-4" size={32} />
           <h3 className="text-xl font-bold mb-2">Je suis un Parent</h3>
           <p className="text-sm text-slate-500">Suivez la journée de votre enfant.</p>
        </button>
      </div>
    </div>
  );
};

export default LoginView;
