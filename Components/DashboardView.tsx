import React, { useState } from 'react';
import { Clock, TrendingUp, Calendar as CalIcon, AlertCircle, X, CheckCircle2 } from 'lucide-react';
import { Child, AttendanceState, View } from '../types';
import Logo from './Logo';

interface DashboardViewProps {
  children: Child[];
  attendances: AttendanceState;
  onPointage: (childId: string, time: string) => void;
  onNavigate: (view: View) => void;
}

const DashboardView: React.FC<DashboardViewProps> = ({ children, attendances, onPointage, onNavigate }) => {
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const todayStr = '2026-01-19';

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-gradient-to-r from-rose-400 to-pink-500 rounded-[2.5rem] p-10 text-white shadow-xl relative overflow-hidden">
        <Logo className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10 rotate-12" size={256} />
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-2">Lundi 19 Janvier 2026 ✨</h1>
          <p className="text-rose-100 opacity-90 max-w-md">Bienvenue sur votre espace de gestion bienveillant.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button onClick={() => setShowCheckInModal(true)} className="px-8 py-4 bg-white text-rose-500 rounded-2xl font-bold text-sm shadow-lg hover:scale-105 transition-all">Pointer une arrivée</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-rose-100 dark:border-slate-800 shadow-sm">
          <p className="text-slate-500 text-sm">Heures du mois</p>
          <h4 className="text-2xl font-bold text-slate-900 dark:text-white">48.5 h</h4>
        </div>
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-rose-100 dark:border-slate-800 shadow-sm">
          <p className="text-slate-500 text-sm">Rémunération Brute</p>
          <h4 className="text-2xl font-bold text-slate-900 dark:text-white">282,10 €</h4>
        </div>
        <div className="p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-rose-100 dark:border-slate-800 shadow-sm">
          <p className="text-slate-500 text-sm">Enfants présents</p>
          <h4 className="text-2xl font-bold text-rose-500">
             {Object.values(attendances).filter(a => a[todayStr]?.status === 'present').length} / {children.length}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
