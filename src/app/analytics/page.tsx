// src/app/analytics/page.tsx
// HTML pasted as-is from Stitch via dangerouslySetInnerHTML. DO NOT convert to JSX.

export default function AnalyticsPage() {
  const html = `
<!-- SideNavBar -->
<aside class="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-[#f3f4f5] dark:bg-slate-950 py-8 gap-y-2 z-40">
  <div class="px-8 mb-10">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
        <span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">spa</span>
      </div>
      <div>
        <h2 class="text-lg font-['Manrope'] font-bold text-[#546253] dark:text-[#9aa998]">Restorative Canvas</h2>
        <p class="text-[10px] uppercase tracking-widest text-slate-500">Management Portal</p>
      </div>
    </div>
  </div>
  <nav class="flex-1 px-4 space-y-1">
    <a class="flex items-center text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all hover:translate-x-1" href="#">
      <span class="material-symbols-outlined mr-3">dashboard</span>
      <span class="font-['Inter'] text-sm tracking-wide">Dashboard</span>
    </a>
    <a class="flex items-center text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all hover:translate-x-1" href="#">
      <span class="material-symbols-outlined mr-3">group</span>
      <span class="font-['Inter'] text-sm tracking-wide">Clients</span>
    </a>
    <a class="flex items-center text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all hover:translate-x-1" href="#">
      <span class="material-symbols-outlined mr-3">badge</span>
      <span class="font-['Inter'] text-sm tracking-wide">Staff</span>
    </a>
    <a class="flex items-center text-[#546253] dark:text-[#9aa998] font-bold bg-[#ffffff] dark:bg-slate-900 rounded-lg shadow-sm px-4 py-3 ml-2 transition-all" href="#">
      <span class="material-symbols-outlined mr-3">analytics</span>
      <span class="font-['Inter'] text-sm tracking-wide">Analytics</span>
    </a>
  </nav>
  <div class="px-4 mt-auto pt-8 border-t border-outline-variant/10">
    <a class="flex items-center text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] transition-all" href="#">
      <span class="material-symbols-outlined mr-3">settings</span>
      <span class="font-['Inter'] text-sm tracking-wide">Settings</span>
    </a>
    <a class="flex items-center text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] transition-all" href="#">
      <span class="material-symbols-outlined mr-3">contact_support</span>
      <span class="font-['Inter'] text-sm tracking-wide">Support</span>
    </a>
  </div>
</aside>

<!-- Main Content Canvas -->
<main class="md:ml-64 min-h-screen">
  <!-- TopAppBar -->
  <header class="flex justify-between items-center w-full px-8 py-4 h-16 bg-[#f8f9fa] dark:bg-slate-900 sticky top-0 z-50 shadow-[0px_20px_40px_rgba(25,28,29,0.06)]">
    <div class="flex items-center gap-4">
      <h1 class="text-xl font-['Manrope'] font-black tracking-tighter text-[#546253] dark:text-[#9aa998]">Performance Pulse</h1>
    </div>
    <div class="flex items-center gap-6">
      <div class="hidden md:flex items-center bg-[#f3f4f5] dark:bg-slate-800 px-4 py-1.5 rounded-full">
        <span class="material-symbols-outlined text-slate-400 text-lg mr-2">search</span>
        <input class="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface" placeholder="Search analytics..." type="text"/>
      </div>
      <div class="flex items-center gap-3">
        <button class="p-2 text-slate-500 hover:bg-[#f3f4f5] rounded-full transition-colors">
          <span class="material-symbols-outlined">notifications</span>
        </button>
        <button class="p-2 text-slate-500 hover:bg-[#f3f4f5] rounded-full transition-colors">
          <span class="material-symbols-outlined">help_outline</span>
        </button>
        <div class="h-8 w-8 rounded-full overflow-hidden ml-2 bg-primary-container">
          <img alt="Administrator profile avatar" class="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3-gW5odojIiQz-_mbMAWzkOqIEESh79N5dVA2YwZNQdRv7e_597Jz8qngDuT3pYTW0OfbvctGWyWsKXf6wSD1atbhuN8SUGjUaWpMIZKzKa7HXl6L4QJFv6YWVjaI_ogFrc-ZPvsp7IB-h6h9fezLRB8lEWJqzOHVi809BC28QqQalox5u41INOgZ_5XZmUQ07kGfTQXL55Xl47VDLb3bCx5OB6xA6BliTAApWFBI_p7YdgkWnIen80DolLn1fTYqjfDMagOFLt4"/>
        </div>
      </div>
    </div>
  </header>

  <!-- Editorial Content Area -->
  <div class="p-8 max-w-7xl mx-auto">
    <!-- Header Section -->
    <div class="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div class="max-w-2xl">
        <span class="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3 block">Center Vitality</span>
        <h2 class="text-5xl font-extrabold tracking-tight text-on-background mb-4 font-headline">Performance Pulse</h2>
        <p class="text-lg text-on-surface-variant font-body leading-relaxed">
          Track restorative progress and operational efficiency. Your data canvas is ready for its first strokes of insight.
        </p>
      </div>
      <div>
        <button class="px-8 py-3.5 bg-primary hover:bg-opacity-90 text-white rounded-xl font-bold shadow-lg transition-all flex items-center gap-2">
          <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">calendar_today</span>
          Schedule First Review
        </button>
      </div>
    </div>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Large Featured Placeholder -->
      <div class="md:col-span-8 bg-surface-container-lowest rounded-2xl p-10 flex flex-col min-h-[400px] justify-center items-center text-center relative overflow-hidden">
        <div class="w-24 h-24 mb-8 text-primary/20">
          <span class="material-symbols-outlined" style="font-size: 6rem; line-height: 1;">monitoring</span>
        </div>
        <h3 class="text-2xl font-bold text-on-background mb-3">No data available for the selected period</h3>
        <p class="text-on-surface-variant max-w-md mx-auto">
          Your performance trends will appear here as you log sessions and track client outcomes. Start by adding your first entry.
        </p>
        <!-- Decorative Chart Silhouettes -->
        <div class="mt-12 w-full max-w-lg h-32 flex items-end justify-between gap-2 px-8">
          <div class="w-full bg-surface-container-low rounded-t-lg" style="height: 40%"></div>
          <div class="w-full bg-surface-container-low rounded-t-lg" style="height: 60%"></div>
          <div class="w-full bg-surface-container-low rounded-t-lg" style="height: 35%"></div>
          <div class="w-full bg-surface-container-low rounded-t-lg" style="height: 75%"></div>
          <div class="w-full bg-surface-container-low rounded-t-lg" style="height: 50%"></div>
          <div class="w-full bg-surface-container-low rounded-t-lg" style="height: 90%"></div>
        </div>
      </div>

      <!-- Insights Side Card -->
      <div class="md:col-span-4 space-y-6">
        <div class="bg-surface-container-low rounded-2xl p-8 h-full flex flex-col justify-center border border-outline-variant/10">
          <div class="w-12 h-12 rounded-full bg-tertiary-fixed text-on-tertiary-container flex items-center justify-center mb-6">
            <span class="material-symbols-outlined">lightbulb</span>
          </div>
          <h4 class="text-xl font-bold mb-3 text-on-background">Awaiting Insights</h4>
          <p class="text-sm text-on-surface-variant leading-relaxed mb-6">
            Insights will appear here as you log sessions. We'll analyze client retention and staff utilization to provide actionable advice.
          </p>
          <div class="space-y-3">
            <div class="h-2 w-3/4 bg-outline-variant/20 rounded-full"></div>
            <div class="h-2 w-1/2 bg-outline-variant/20 rounded-full"></div>
          </div>
        </div>
      </div>

      <!-- Bottom Row: Metric Cards -->
      <div class="md:col-span-4 bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/5">
        <div class="flex justify-between items-start mb-8">
          <span class="text-[10px] font-bold uppercase tracking-widest text-primary">Client Pulse</span>
          <span class="material-symbols-outlined text-outline-variant">person_search</span>
        </div>
        <div class="text-4xl font-black text-on-background/20 mb-2">--</div>
        <p class="text-xs text-on-surface-variant">Active Engagements</p>
        <div class="mt-6 pt-6 border-t border-surface-container-low">
          <p class="text-xs italic text-on-surface-variant/60">Session activity needed for calculation</p>
        </div>
      </div>

      <div class="md:col-span-4 bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/5">
        <div class="flex justify-between items-start mb-8">
          <span class="text-[10px] font-bold uppercase tracking-widest text-secondary">Vitality Index</span>
          <span class="material-symbols-outlined text-outline-variant">favorite</span>
        </div>
        <div class="text-4xl font-black text-on-background/20 mb-2">N/A</div>
        <p class="text-xs text-on-surface-variant">Wellness Score Average</p>
        <div class="mt-6 pt-6 border-t border-surface-container-low">
          <p class="text-xs italic text-on-surface-variant/60">Complete 3 reviews to see score</p>
        </div>
      </div>

      <div class="md:col-span-4 bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/5">
        <div class="flex justify-between items-start mb-8">
          <span class="text-[10px] font-bold uppercase tracking-widest text-primary">Staff Load</span>
          <span class="material-symbols-outlined text-outline-variant">assignment_ind</span>
        </div>
        <div class="text-4xl font-black text-on-background/20 mb-2">0%</div>
        <p class="text-xs text-on-surface-variant">Capacity Utilization</p>
        <div class="mt-6 pt-6 border-t border-surface-container-low">
          <div class="w-full h-1.5 bg-surface-container-low rounded-full overflow-hidden">
            <div class="bg-primary/20 h-full w-0"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<!-- Mobile Bottom Navigation -->
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-surface-container-lowest shadow-[0_-10px_30px_rgba(0,0,0,0.05)] px-6 py-3 flex justify-between items-center z-50">
  <button class="flex flex-col items-center gap-1 text-slate-400">
    <span class="material-symbols-outlined">dashboard</span>
    <span class="text-[10px] font-medium">Home</span>
  </button>
  <button class="flex flex-col items-center gap-1 text-slate-400">
    <span class="material-symbols-outlined">group</span>
    <span class="text-[10px] font-medium">Clients</span>
  </button>
  <button class="flex flex-col items-center gap-1 text-primary">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">analytics</span>
    <span class="text-[10px] font-bold">Pulse</span>
  </button>
  <button class="flex flex-col items-center gap-1 text-slate-400">
    <span class="material-symbols-outlined">settings</span>
    <span class="text-[10px] font-medium">Setup</span>
  </button>
</nav>
`;

  return (
    <div
      className="bg-surface text-on-surface"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}