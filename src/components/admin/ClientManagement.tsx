import { Plus, Users, Upload, UserPlus } from 'lucide-react';
import { motion } from 'motion/react';

export default function ClientManagement() {
  return (
    <div className="p-8 md:p-12 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
      >
        <div className="space-y-2">
          <span className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase font-sans">Wellness Directory</span>
          <h1 className="text-5xl font-extrabold tracking-tighter text-on-surface font-display">Client Management</h1>
        </div>
        <div>
          <button className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group hover:-translate-y-1">
            <UserPlus size={20} className="transition-transform group-hover:scale-110" />
            Register New Client
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        {/* Table Header Simulation */}
        <div className="bg-surface-container-low rounded-t-[2rem] px-8 py-6 border-b border-outline-variant/10">
          <div className="grid grid-cols-4 text-[10px] font-bold tracking-[0.15em] text-primary uppercase font-sans">
            <span>Client Identity</span>
            <span>Registration Date</span>
            <span>Program Status</span>
            <span className="text-right">Actions</span>
          </div>
        </div>

        {/* Empty State Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-surface-container-lowest rounded-b-[2rem] shadow-sm min-h-[550px] flex flex-col items-center justify-center p-12 text-center relative overflow-hidden"
        >
          {/* Decorative Blooms */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-fixed/30 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-fixed/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none" />

          <div className="relative z-10 max-w-md flex flex-col items-center">
            <div className="w-48 h-48 mb-8 relative">
              <div className="absolute inset-0 bg-primary/5 rounded-full scale-110 blur-xl" />
              <div className="w-full h-full rounded-full overflow-hidden border-8 border-white/50 shadow-2xl">
                <img
                  src="https://picsum.photos/seed/monstera-leaf-wellness/400/400"
                  alt="Peaceful Growth"
                  className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-secondary-container text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transform rotate-12">
                <Users size={28} />
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-on-surface mb-3">Your client list is currently empty.</h3>
            <p className="text-on-surface-variant leading-relaxed mb-10 font-sans text-lg">
              Start building your wellness community by adding your first participant. Manage schedules, progress, and personalized care from one serene space.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button className="flex-1 bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group">
                <Upload size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                Import CSV
              </button>
              <button className="flex-1 bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95">
                <Plus size={18} />
                Quick Add
              </button>
            </div>

            <div className="mt-12 flex items-center gap-2 text-on-surface-variant/40">
              <div className="h-4 w-4 rounded-full border border-current flex items-center justify-center text-[10px] font-black">i</div>
              <p className="text-xs font-medium">Need help onboarding clients? <button className="text-primary hover:underline underline-offset-4">View the guide</button></p>
            </div>
          </div>
        </motion.div>
      </div>

      <footer className="py-12 text-center text-on-surface-variant/20">
        <p className="text-[10px] font-bold uppercase tracking-[0.4em]">Restorative Admin © 2026</p>
      </footer>
    </div>
  );
}
