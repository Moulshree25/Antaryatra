"use client";

import { Search, Bell, HelpCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-surface/80 backdrop-blur-md px-8 shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
      <div className="flex flex-1 items-center max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40" size={18} />
          <input
            type="text"
            placeholder="Search records..."
            className="w-full rounded-full border-none bg-surface-container-low pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/40 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1">
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-secondary border-2 border-surface"></span>
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-low transition-colors">
            <HelpCircle size={20} />
          </button>
        </div>
        
        <div className="h-8 w-[1px] bg-outline-variant/20 mx-2" />
        
        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="font-display text-xs font-bold text-on-surface">Admin User</p>
            <p className="text-[10px] text-on-surface-variant/60">Wellness Director</p>
          </div>
          <div className="h-9 w-9 overflow-hidden rounded-full border-2 border-white shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
              alt="Admin Profile"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
