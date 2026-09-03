"use client";

import { LayoutDashboard, Users, UserRoundCog, BarChart3, Settings, HelpCircle, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'clients', label: 'Clients', icon: Users },
    { id: 'staff', label: 'Staff', icon: UserRoundCog },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ];

  return (
    <aside className="fixed left-0 top-0 hidden h-screen w-[210px] flex-col bg-surface-container-low py-8 md:flex z-40 border-r border-outline-variant/10">
      <div className="px-6 pt-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#73816C] shadow-lg shadow-primary/20">
            <Leaf className="text-white fill-white" size={24} />
          </div>
          <div>
            <h1 className="font-display text-lg font-bold text-primary leading-tight">Restorative Canvas</h1>
            <p className="text-[10px] uppercase tracking-[0.1em] text-on-surface-variant/60 font-bold">Management Portal</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => setActiveTab(item.id)}
              className={`flex w-full items-center gap-3 px-5 py-4 transition-all duration-300 rounded-2xl group ${
                isActive 
                  ? 'bg-surface-container-lowest text-primary font-bold shadow-sm' 
                  : 'text-on-surface-variant hover:text-primary hover:translate-x-1'
              }`}
            >
              <Icon size={20} className={isActive ? 'fill-primary/10' : ''} />
              <span className="text-sm tracking-wide">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute left-0 w-1 h-6 bg-[#73816C] rounded-r-full"
                />
              )}
            </button>
          );
        })}
      </nav>

      <div className="mt-auto px-6 pt-10 pb-6 border-t border-outline-variant/10 space-y-1">
        <button className="flex w-full items-center gap-3 px-5 py-4 text-on-surface-variant hover:text-primary transition-all rounded-2xl">
          <Settings size={20} />
          <span className="text-sm tracking-wide">Settings</span>
        </button>
        <button className="flex w-full items-center gap-3 px-5 py-4 text-on-surface-variant hover:text-primary transition-all rounded-2xl">
          <HelpCircle size={20} />
          <span className="text-sm tracking-wide">Support</span>
        </button>
      </div>
    </aside>
  );
}
