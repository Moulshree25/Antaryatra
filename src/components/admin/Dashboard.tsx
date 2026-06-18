"use client";

import { motion } from "framer-motion";
import {
  Plus,
  BarChart,
  Users,
  LayoutDashboard,
  ArrowRight,
  CalendarX
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="px-10 pt-10 pb-12 max-w-[1380px] mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
      >
        <div className="max-w-xl">
          <span className="text-[10px] font-bold tracking-[0.15em] text-primary uppercase mb-2 block">System Overview</span>
          <h2 className="text-[64px] font-display font-extrabold text-on-surface tracking-tighter leading-none mb-4">Welcome to Restorative Admin</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            Your wellness center is currently quiet. Start by adding your first client or exploring your new management toolkit.
          </p>
        </div>
        <div className="flex gap-3">
           <button className="bg-surface-container-high hover:bg-surface-container-highest text-primary px-6 py-3 rounded-xl flex items-center gap-2 font-bold transition-all">
            Export Report
          </button>
          <button className="bg-[#73816C] hover:bg-[#73816C]-container text-white px-8 py-4 rounded-xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-primary/20 hover:-translate-y-1">
            <Plus size={20} />
            Add New Booking
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Activity Chart Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-8 bg-white p-10 rounded-[28px] flex flex-col items-center justify-center min-h-[400px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] relative overflow-hidden group"
        >
          <div className="absolute inset-0 opacity-5 flex items-end justify-center pointer-events-none transition-transform duration-1000 group-hover:scale-110">
            <svg className="w-full h-48 text-primary" viewBox="0 0 1000 200" preserveAspectRatio="none">
              <path d="M0,150 Q250,50 500,150 T1000,50" fill="none" stroke="currentColor" strokeWidth="8" />
            </svg>
          </div>
          
          <div className="bg-[#DCE7D5] w-20 h-20 rounded-[28px] flex items-center justify-center text-primary mb-6 shadow-inner">
            <BarChart size={32} />
          </div>
          <h3 className="text-xl font-display font-bold mb-2 text-on-surface text-center">No activity detected yet</h3>
          <p className="text-on-surface-variant text-center max-w-xs mb-8">
            Once your clients start booking sessions, your weekly activity chart will appear here with rich insights.
          </p>
          <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform group">
            Explore demo data <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Metric Cards */}
        <div className="md:col-span-4 space-y-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface-container-lowest p-8 rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] flex flex-col items-center text-center h-[188px] justify-center"
          >
            <BarChart size={32} className="text-secondary mb-3" />
            <h4 className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">Total Revenue</h4>
            <p className="text-4xl font-display font-black text-on-surface">$0.00</p>
            <p className="text-[10px] text-on-surface-variant/40 mt-2 italic">Awaiting first transaction</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-surface-container-lowest p-8 rounded-[28px] shadow-[0px_20px_40px_rgba(25,28,29,0.06)] flex flex-col items-center text-center h-[188px] justify-center"
          >
            <Users size={32} className="text-primary mb-3" />
            <h4 className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-widest mb-1">New Registrations</h4>
            <p className="text-4xl font-display font-black text-on-surface">0</p>
            <p className="text-[10px] text-on-surface-variant/40 mt-2 italic">Invite your first client via email</p>
          </motion.div>
        </div>

        {/* Upcoming Appointments */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-12 bg-surface-container-low rounded-[28px] p-1 shadow-sm"
        >
          <div className="bg-surface-container-lowest rounded-[1.9rem] p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-display font-bold text-on-surface">Upcoming Appointments</h3>
              <span className="bg-[#73816C]-fixed text-primary px-3 py-1 rounded-full text-xs font-bold">Upcoming: 0</span>
            </div>
            
            <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-outline-variant/20 rounded-[28px] bg-surface/30">
              <div className="w-20 h-20 bg-surface-container-low rounded-[28px] flex items-center justify-center mb-4">
                <LayoutDashboard size={40} className="text-on-surface-variant/20" />
              </div>
              <p className="text-lg font-display font-bold text-on-surface">Your schedule is clear</p>
              <p className="text-on-surface-variant mb-6 text-center max-w-sm">
                There are no upcoming appointments scheduled for this week.
              </p>
              <button className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-[#73816C] hover:text-white transition-all active:scale-95">
                Setup Availability
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
