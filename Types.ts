export interface EmergencyContact {
  id: string;
  name: string;
  relation: string;
  phone: string;
  isDoctor?: boolean;
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo: string;
  address?: string;
  emergencyContacts?: EmergencyContact[];
}

export interface Message {
  id: string;
  senderRole: 'parent' | 'nanny';
  text: string;
  timestamp: string;
  isEdited: boolean;
  status: 'sent' | 'read';
}

export interface JournalEntry {
  id: string;
  childId: string;
  type: 'meal' | 'sleep' | 'activity' | 'hygiene' | 'mood';
  time: string;
  note: string;
  photo?: string;
}

export interface Child {
  id: string;
  firstName: string;
  lastName: string;
  gender: 'boy' | 'girl';
  birthDate: string;
  parentName: string;
  parentPhone: string;
  photo: string;
  allergies: string;
  emergencyContacts: EmergencyContact[];
}

export interface AttendanceRecord {
  checkIn?: string;
  checkOut?: string;
  status: 'present' | 'absent' | 'planned' | 'none';
}

export interface AttendanceState {
  [childId: string]: {
    [date: string]: AttendanceRecord;
  };
}

export interface Payslip {
  id: string;
  period: string;
  dateGenerated: string;
  netSalary: number;
  totalDue: number;
  realCost: number;
  hours: number;
}

export interface Contract {
  id: string;
  parentName: string;
  nannyName: string;
  hourlyRate: number;
  startDate: string;
  monthlyHours: number;
  status: 'active' | 'pending' | 'signed_parent' | 'signed_both';
  maintenanceFeeDay: number;
  mealPriceDay: number;
  type: 'complete' | 'incomplete';
  weeksPerYear: number;
  hoursPerWeek: number;
  parentSignature?: string;
  nannySignature?: string;
  signedAt?: string;
  payslips?: Payslip[];
}

export type View = 'dashboard' | 'planning' | 'contracts' | 'profiles' | 'chatbot' | 'faq' | 'legal' | 'settings' | 'messaging' | 'journal';
