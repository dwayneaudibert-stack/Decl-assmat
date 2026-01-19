import React, { useState, useRef, useEffect } from 'react';
import { LayoutDashboard, Calendar, FileText, Users, MessageCircle, Menu, X, Bell, LogOut, CheckCheck, Info, DollarSign, Clock, HelpCircle, Star, ShieldCheck, Crown, Shield, Mail, Phone, User, Settings as SettingsIcon, AlertTriangle, Send, Sparkles, BookOpen, Sun, Moon, ChevronRight } from 'lucide-react';
import { View, Child, Contract, AttendanceState, UserProfile, Message, JournalEntry } from './types';
import DashboardView from './components/DashboardView';
import PlanningView from './components/PlanningView';
import ContractView from './components/ContractView';
import ProfileView from './components/ProfileView';
import AILabView from './components/AILabView';
import FAQView from './components/FAQView';
import LegalView from './components/LegalView';
import LoginView from './components/LoginView';
import RegisterView from './components/RegisterView';
import ProfileSettingsView from './components/ProfileSettingsView';
import MessagingView from './components/MessagingView';
import SubscriptionView from './components/SubscriptionView';
import JournalView from './components/JournalView';
import Logo from './components/Logo';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showSubscription, setShowSubscription] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [currentView, setCurrentView] = useState<View>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [userRole, setUserRole] = useState<'parent' | 'nanny'>('nanny');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isProfileCardOpen, setIsProfileCardOpen] = useState(false);
  
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDarkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDarkMode]);

  const [currentUser, setCurrentUser] = useState<UserProfile>({
    firstName: 'Marie', lastName: 'Durand', email: 'marie.durand@exemple.com',
    phone: '06 12 34 56 78', photo: 'https://picsum.photos/seed/user/100',
    address: '12 rue des Lilas, 75020 Paris',
    emergencyContacts: [{ id: '1', name: 'Dr. Legrand', relation: 'Médecin Traitant', phone: '01 40 20 30 40', isDoctor: true }]
  });

  const [partnerUser] = useState<UserProfile>({
    firstName: 'Sophie', lastName: 'Martin', email: 'sophie.martin@email.fr',
    phone: '07 88 99 00 11', photo: 'https://picsum.photos/seed/sophie/100',
    address: '45 avenue de la Paix, 75020 Paris',
    emergencyContacts: [{ id: 'e1', name: 'Jean Martin', relation: 'Grand-Père', phone: '06 00 11 22 33' }]
  });

  const [messages, setMessages] = useState<Message[]>([]);
  const [children, setChildren] = useState<Child[]>([
    { id: '1', firstName: 'Léo', lastName: 'Martin', gender: 'boy', birthDate: '2021-05-12', parentName: 'Sophie Martin', parentPhone: '07 88 99 00 11', photo: 'https://picsum.photos/seed/leo/100', allergies: 'Aucune', emergencyContacts: [] }
  ]);

  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [contracts, setContracts] = useState<Contract[]>([
    { id: 'c1', parentName: 'Sophie Martin', nannyName: 'Mme. Durand', hourlyRate: 4.50, startDate: '2023-09-01', monthlyHours: 120, status: 'active', maintenanceFeeDay: 3.75, mealPriceDay: 4.00, type: 'complete', weeksPerYear: 52, hoursPerWeek: 35, payslips: [] }
  ]);

  const [attendances, setAttendances] = useState<AttendanceState>({
    '1': { '2026-01-19': { status: 'none' } }
  });

  const handleLogin = (role: 'parent' | 'nanny') => {
    setUserRole(role);
    if (role === 'parent' && !isSubscribed) setShowSubscription(true);
    else setIsLoggedIn(true);
  };

  const NavItem = ({ view, icon: Icon, label }: { view: View, icon: any, label: string }) => (
    <button onClick={() => setCurrentView(view)} className={`flex items-center space-x-3 w-full px-4 py-3 rounded-2xl transition-all ${currentView === view ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/40' : 'text-slate-500'}`}>
      <Icon size={20} />
      {isSidebarOpen && <span className="text-sm">{label}</span>}
    </button>
  );

  if (!isLoggedIn && !showSubscription && !isRegistering) return <LoginView onLogin={handleLogin} onGoToRegister={() => setIsRegistering(true)} onShowLegal={() => setCurrentView('legal')} />;
  if (isRegistering) return <RegisterView onRegisterSuccess={(role, data) => { setUserRole(role); setIsLoggedIn(true); setIsRegistering(false); }} onCancel={() => setIsRegistering(false)} />;
  if (showSubscription) return <SubscriptionView onSubscribe={() => { setIsSubscribed(true); setShowSubscription(false); setIsLoggedIn(true); }} onCancel={() => { setShowSubscription(false); setIsLoggedIn(false); }} />;

  return (
    <div className="flex h-screen bg-[#fffafa] dark:bg-slate-950">
      <aside className={`bg-white dark:bg-slate-900 border-r border-rose-100 transition-all ${isSidebarOpen ? 'w-72' : 'w-24'}`}>
        <div className="p-8 flex flex-col items-center border-b border-rose-50">
          <Logo className="text-rose-500" size={48} />
          {isSidebarOpen && <h1 className="text-lg font-bold mt-2">Décl’assmat</h1>}
        </div>
        <nav className="p-6 space-y-2">
          <NavItem view="dashboard" icon={LayoutDashboard} label="Tableau de Bord" />
          <NavItem view="planning" icon={Calendar} label="Planning & Pointage" />
          <NavItem view="journal" icon={BookOpen} label="Suivi de la journée" />
          <NavItem view="messaging" icon={MessageCircle} label="Messagerie" />
          <NavItem view="contracts" icon={FileText} label="Contrats & Paie" />
          <NavItem view="profiles" icon={Users} label="Fiches & Urgences" />
          <NavItem view="chatbot" icon={Sparkles} label="Assistant IA" />
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto relative">
        <header className="sticky top-0 bg-[#fffafa]/80 backdrop-blur-xl px-10 py-6 flex items-center justify-between border-b dark:border-slate-800">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="p-2 bg-white rounded-xl border border-rose-100"><Menu size={20} /></button>
          <div className="flex items-center space-x-4">
             <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-3 bg-white rounded-xl border">{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
          </div>
        </header>

        <div className="px-10 pb-10 max-w-7xl mx-auto pt-8">
          {currentView === 'dashboard' && <DashboardView children={children} attendances={attendances} onPointage={() => {}} onNavigate={setCurrentView} />}
          {currentView === 'planning' && <PlanningView children={children} attendances={attendances} />}
          {currentView === 'journal' && <JournalView entries={journalEntries} children={children} userRole={userRole} onAddEntry={(e) => setJournalEntries([e as any, ...journalEntries])} />}
          {currentView === 'messaging' && <MessagingView messages={messages} userRole={userRole} partnerProfile={partnerUser} onSendMessage={(t) => {}} onEditMessage={() => {}} onNavigate={setCurrentView} />}
          {currentView === 'contracts' && <ContractView contracts={contracts} userRole={userRole} onAddContract={() => {}} onUpdateContract={() => {}} />}
          {currentView === 'profiles' && <ProfileView children={children} userRole={userRole} partnerProfile={partnerUser} onAddChild={() => {}} />}
          {currentView === 'chatbot' && <AILabView />}
        </div>
      </main>
    </div>
  );
};

export default App;
