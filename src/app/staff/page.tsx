// src/app/staff/page.tsx
// HTML pasted as-is from Stitch via dangerouslySetInnerHTML. DO NOT convert to JSX.

export default function StaffPage() {
  const html = `
<!-- SideNavBar -->
<aside class="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-[#f3f4f5] dark:bg-slate-950 font-['Inter'] text-sm tracking-wide py-8 gap-y-2 z-40">
  <div class="px-8 mb-10">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
        <span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">spa</span>
      </div>
      <div>
        <h1 class="text-lg font-['Manrope'] font-bold text-[#546253] dark:text-[#9aa998]">Restorative Canvas</h1>
        <p class="text-[10px] text-slate-500 uppercase tracking-[0.1em]">Management Portal</p>
      </div>
    </div>
  </div>
  <nav class="flex-1 px-4 space-y-1">
    <a class="text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all hover:translate-x-1 flex items-center gap-3 group" href="#">
      <span class="material-symbols-outlined text-xl">dashboard</span>
      <span>Dashboard</span>
    </a>
    <a class="text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all hover:translate-x-1 flex items-center gap-3 group" href="#">
      <span class="material-symbols-outlined text-xl">group</span>
      <span>Clients</span>
    </a>
    <a class="text-[#546253] dark:text-[#9aa998] font-bold bg-[#ffffff] dark:bg-slate-900 rounded-lg shadow-sm px-4 py-3 ml-2 flex items-center gap-3" href="#">
      <span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">badge</span>
      <span>Staff</span>
    </a>
    <a class="text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all hover:translate-x-1 flex items-center gap-3 group" href="#">
      <span class="material-symbols-outlined text-xl">analytics</span>
      <span>Analytics</span>
    </a>
  </nav>
  <div class="mt-auto px-4 pt-8 border-t border-outline-variant/10">
    <a class="text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all flex items-center gap-3" href="#">
      <span class="material-symbols-outlined text-xl">settings</span>
      <span>Settings</span>
    </a>
    <a class="text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all flex items-center gap-3" href="#">
      <span class="material-symbols-outlined text-xl">contact_support</span>
      <span>Support</span>
    </a>
  </div>
</aside>

<!-- Main Canvas -->
<main class="md:ml-64 min-h-screen">
  <!-- TopNavBar -->
  <header class="bg-[#f8f9fa] dark:bg-slate-900 shadow-[0px_20px_40px_rgba(25,28,29,0.06)] flex justify-between items-center w-full px-8 py-4 h-16 sticky top-0 z-30">
    <div class="flex items-center flex-1 max-w-md">
      <div class="relative w-full">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
        <input class="w-full bg-[#f3f4f5] border-none rounded-full pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary/20 placeholder-slate-400" placeholder="Search staff records..." type="text"/>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f3f4f5] transition-colors">
        <span class="material-symbols-outlined text-slate-600">notifications</span>
      </button>
      <button class="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#f3f4f5] transition-colors">
        <span class="material-symbols-outlined text-slate-600">help_outline</span>
      </button>
      <div class="h-8 w-[1px] bg-outline-variant/20 mx-2"></div>
      <div class="flex items-center gap-3">
        <div class="text-right hidden sm:block">
          <p class="text-xs font-bold font-display">Admin User</p>
          <p class="text-[10px] text-slate-500">Super Administrator</p>
        </div>
        <img alt="Administrator profile avatar" class="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY181qsORVxaWYqkWrMBSpKdLTsXldhgMpznzjRPiHahSGCutugyyWQRjfZgFomxkduRWyc-SBFh-FArQpzX-PAmwtjYXNB4DK1Oa8qCWMu4_Qf9jbMiuYQBEGtlV78g-OfCeaq6aA-LP71L9gNswkwK02ehKuapa2YFBOrueZjWzhf-DMN_FVntaOHGkNv3sXfZpF86GurqOVkAWo4Bmmd9VIQ_pg5h0icpNG7e279KD_Kr2Y2q0LWVpbaK_HTnycWwSFhmo3oQ8"/>
      </div>
    </div>
  </header>

  <!-- Content Area -->
  <div class="p-8 max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div class="max-w-xl">
        <span class="text-[10px] font-bold font-label tracking-[0.15em] text-primary uppercase mb-2 block">Personnel Directory</span>
        <h2 class="text-5xl font-display font-extrabold text-on-surface tracking-tighter leading-none mb-4">Staff Records</h2>
        <p class="text-slate-500 text-lg leading-relaxed">Manage your wellness ecosystem by onboarding practitioners, specialists, and support staff members to the Restorative Canvas.</p>
      </div>
      <div class="flex-shrink-0">
        <button class="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl flex items-center gap-2 font-bold transition-all shadow-lg shadow-primary/20 hover:-translate-y-1">
          <span class="material-symbols-outlined">person_add</span>
          Add Staff Member
        </button>
      </div>
    </div>

    <!-- Empty State Canvas -->
    <div class="relative overflow-hidden rounded-[2rem] bg-surface-container-low p-1 border border-white/50 min-h-[600px] flex items-center justify-center">
      <!-- Background Texture -->
      <div class="absolute inset-0 opacity-40">
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary-fixed/30 rounded-full blur-[100px]"></div>
        <div class="absolute bottom-0 left-0 w-80 h-80 bg-secondary-fixed/20 rounded-full blur-[80px]"></div>
      </div>

      <div class="relative z-10 w-full max-w-4xl px-6">
        <!-- Ghost Grid Placeholders -->
        <div class="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6 opacity-20 pointer-events-none mb-12">
          <div class="bg-surface-container-lowest p-6 rounded-2xl h-48 flex flex-col justify-between">
            <div class="w-12 h-12 rounded-full bg-surface-container-high"></div>
            <div class="space-y-2">
              <div class="h-4 w-3/4 bg-surface-container-high rounded"></div>
              <div class="h-3 w-1/2 bg-surface-container-high rounded"></div>
            </div>
          </div>
          <div class="bg-surface-container-lowest p-6 rounded-2xl h-48 flex flex-col justify-between">
            <div class="w-12 h-12 rounded-full bg-surface-container-high"></div>
            <div class="space-y-2">
              <div class="h-4 w-2/3 bg-surface-container-high rounded"></div>
              <div class="h-3 w-1/3 bg-surface-container-high rounded"></div>
            </div>
          </div>
          <div class="bg-surface-container-lowest p-6 rounded-2xl h-48 flex flex-col justify-between">
            <div class="w-12 h-12 rounded-full bg-surface-container-high"></div>
            <div class="space-y-2">
              <div class="h-4 w-1/2 bg-surface-container-high rounded"></div>
              <div class="h-3 w-3/4 bg-surface-container-high rounded"></div>
            </div>
          </div>
        </div>

        <!-- Glassmorphism Center Card -->
        <div class="mx-auto max-w-md bg-white/70 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-[0px_40px_80px_rgba(25,28,29,0.08)] border border-white text-center">
          <div class="w-20 h-20 bg-primary-fixed rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <span class="material-symbols-outlined text-4xl text-primary" style="font-variation-settings: 'FILL' 1;">badge</span>
          </div>
          <h3 class="text-2xl font-display font-extrabold text-on-surface mb-3">Begin Your Roster</h3>
          <p class="text-slate-500 font-body leading-relaxed mb-8">No practitioners onboarded yet. Add your first wellness expert to start managing schedules and records.</p>
          <div class="space-y-3">
            <button class="w-full bg-primary text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all active:scale-95">
              Add Staff Member
            </button>
            <button class="w-full bg-surface-container-high text-primary py-4 rounded-xl font-bold hover:bg-surface-container-highest transition-all">
              Import CSV Data
            </button>
          </div>
        </div>

        <!-- Bottom Hints -->
        <div class="mt-12 flex flex-wrap justify-center gap-8 text-slate-400 font-label text-xs uppercase tracking-widest opacity-60">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-sm">verified_user</span>
            Credential Tracking
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-sm">schedule</span>
            Shift Management
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-sm">analytics</span>
            Performance Metrics
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<!-- FAB -->
<button class="fixed bottom-8 right-8 w-16 h-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-50 group">
  <span class="material-symbols-outlined text-3xl group-hover:rotate-90 transition-transform">add</span>
</button>
`;

  return (
    <div
      className="bg-surface font-body text-on-surface antialiased"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}