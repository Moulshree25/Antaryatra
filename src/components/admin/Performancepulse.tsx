import { BarChart3, TrendingUp, Heart, UserSquare, Calendar, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PerformancePulse() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
      >
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3 block font-sans">Center Vitality</span>
          <h2 className="text-5xl font-extrabold tracking-tight text-on-surface mb-4 font-display">Performance Pulse</h2>
          <p className="text-lg text-on-surface-variant font-sans leading-relaxed">
            Track restorative progress and operational efficiency. Your data canvas is ready for its first strokes of insight.
          </p>
        </div>
        <button className="px-8 py-3.5 bg-primary hover:bg-primary-container text-white rounded-xl font-bold font-sans shadow-lg shadow-primary/10 transition-all flex items-center gap-2 hover:-translate-y-1">
          <Calendar size={18} className="fill-white/20" />
          Schedule First Review
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Trend Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-8 bg-surface-container-lowest rounded-[2.5rem] p-10 flex flex-col min-h-[420px] justify-center items-center text-center relative overflow-hidden shadow-sm"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:20px_20px]" />
          
          <div className="w-24 h-24 mb-6 text-primary/10 flex items-center justify-center">
             <BarChart3 size={96} strokeWidth={1} />
          </div>
          
          <h3 className="text-2xl font-display font-bold text-on-surface mb-3 px-4">No data available for the selected period</h3>
          <p className="text-on-surface-variant max-w-md mx-auto font-sans">
            Your performance trends will appear here as you log sessions and track client outcomes. Start by adding your first entry.
          </p>
          
          <div className="mt-12 w-full max-w-lg h-32 flex items-end justify-between gap-2 px-8">
            {[40, 60, 35, 75, 50, 90, 45, 65].map((height, i) => (
              <motion.div 
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 0.5 + (i * 0.1), duration: 1, ease: "easeOut" }}
                className="w-full bg-surface-container-low rounded-t-xl hover:bg-primary-fixed transition-colors"
                title={`${height}%`}
              />
            ))}
          </div>
        </motion.div>

        {/* Actionable Insights */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="md:col-span-4 bg-surface-container-low rounded-[2.5rem] p-8 flex flex-col justify-center border border-outline-variant/10 shadow-sm"
        >
          <div className="w-12 h-12 rounded-full bg-primary-fixed text-primary flex items-center justify-center mb-6 shadow-sm">
            <TrendingUp size={24} />
          </div>
          <h4 className="text-xl font-display font-bold mb-3 text-on-surface">Awaiting Insights</h4>
          <p className="text-sm text-on-surface-variant font-sans leading-relaxed mb-8">
            Insights will appear here as you log sessions. We'll analyze client retention and staff utilization to provide actionable advice.
          </p>
          <div className="space-y-4">
            <div className="h-2 w-full bg-outline-variant/10 rounded-full overflow-hidden">
               <div className="h-full w-3/4 bg-outline-variant/20 rounded-full" />
            </div>
            <div className="h-2 w-2/3 bg-outline-variant/10 rounded-full" />
          </div>
        </motion.div>

        {/* Metric Triad */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="md:col-span-4 bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant/5 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary font-sans">Client Pulse</span>
            <Search size={16} className="text-outline-variant group-hover:text-primary transition-colors" />
          </div>
          <div className="text-5xl font-display font-black text-on-surface/10 mb-2">--</div>
          <p className="text-xs text-on-surface-variant font-medium">Active Engagements</p>
          <div className="mt-8 pt-6 border-t border-surface-container-low">
            <p className="text-[10px] italic text-on-surface-variant/40 font-medium tracking-tight">Session activity needed for calculation</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="md:col-span-4 bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant/5 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary font-sans font-bold">Vitality Index</span>
            <Heart size={16} className="text-outline-variant group-hover:text-secondary transition-colors" />
          </div>
          <div className="text-5xl font-display font-black text-on-surface/10 mb-2">N/A</div>
          <p className="text-xs text-on-surface-variant font-medium">Wellness Score Average</p>
          <div className="mt-8 pt-6 border-t border-surface-container-low">
            <p className="text-[10px] italic text-on-surface-variant/40 font-medium tracking-tight">Complete 3 reviews to see score</p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="md:col-span-4 bg-surface-container-lowest rounded-[2rem] p-8 border border-outline-variant/5 shadow-sm hover:shadow-md transition-shadow group"
        >
          <div className="flex justify-between items-start mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary font-sans">Staff Load</span>
            <UserSquare size={16} className="text-outline-variant group-hover:text-primary transition-colors" />
          </div>
          <div className="text-5xl font-display font-black text-on-surface-variant/20 mb-2">0%</div>
          <p className="text-xs text-on-surface-variant font-medium">Capacity Utilization</p>
          <div className="mt-8 pt-6">
            <div className="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "0%" }}
                className="bg-primary h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
