import { Plus, UserRoundCog, Upload, BadgeCheck, Clock, BarChart3, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function StaffRecords() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
      >
        <div className="max-w-xl">
          <span className="text-[10px] font-bold tracking-[0.15em] text-primary uppercase mb-2 block font-sans">Personnel Directory</span>
          <h2 className="text-5xl font-display font-extrabold text-on-surface tracking-tighter leading-none mb-4">Staff Records</h2>
          <p className="text-on-surface-variant text-lg leading-relaxed font-sans">
            Manage your wellness ecosystem by onboarding practitioners, specialists, and support staff members to the Restorative Canvas.
          </p>
        </div>
        <button className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-primary/20 hover:-translate-y-1">
          <Plus size={20} />
          Add Staff Member
        </button>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-surface-container-low p-1 border border-white/50 min-h-[600px] flex items-center justify-center transition-all"
      >
        {/* Atmospheric background elements */}
        <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-fixed/40 rounded-full blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-secondary-fixed/20 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 w-full max-w-4xl px-6">
          {/* Skeleton grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 opacity-10 pointer-events-none">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-surface-container-lowest p-6 rounded-3xl h-48 flex flex-col justify-between shadow-sm">
                <div className="w-12 h-12 rounded-full bg-surface-container-high" />
                <div className="space-y-2">
                  <div className="h-4 w-3/4 bg-surface-container-high rounded" />
                  <div className="h-3 w-1/2 bg-surface-container-high rounded" />
                </div>
              </div>
            ))}
          </div>

          {/* Central Glassmorphism Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mx-auto max-w-md bg-white/70 backdrop-blur-2xl p-10 rounded-[2.5rem] shadow-[0px_40px_80px_rgba(25,28,29,0.06)] border border-white/50 text-center"
          >
            <div className="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border-2 border-white/80">
              <UserRoundCog size={36} className="text-primary fill-primary/10" />
            </div>
            <h3 className="text-2xl font-display font-extrabold text-on-surface mb-3 tracking-tight">Begin Your Roster</h3>
            <p className="text-on-surface-variant font-sans leading-relaxed mb-8">
              No practitioners onboarded yet. Add your first wellness expert to start managing schedules and records.
            </p>
            <div className="space-y-3">
              <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all active:scale-[0.98] shadow-md shadow-primary/10">
                Add Staff Member
              </button>
              <button className="w-full bg-surface-container-high text-primary py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-all active:scale-[0.98]">
                Import CSV Data
              </button>
            </div>
          </motion.div>

          {/* Bottom Meta Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-on-surface-variant/40 font-bold text-[10px] uppercase tracking-[0.2em] opacity-80">
            <div className="flex items-center gap-2">
              <BadgeCheck size={14} />
              Credential Tracking
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} />
              Shift Management
            </div>
            <div className="flex items-center gap-2">
              <BarChart3 size={14} />
              Performance Metrics
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
