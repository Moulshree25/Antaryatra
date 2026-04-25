// src/app/dashboard/page.tsx
// HTML pasted as-is from Stitch via dangerouslySetInnerHTML. DO NOT convert to JSX.

export default function DashboardPage() {
  const html = `
<!-- SideNavBar -->
<aside class="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-[#f3f4f5] py-8 gap-y-2 z-40">
  <div class="px-8 mb-8">
    <div class="flex items-center gap-3">
      <div class="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-on-primary">
        <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">spa</span>
      </div>
      <div>
        <h2 class="text-lg font-headline font-bold text-[#546253]">Restorative Canvas</h2>
        <p class="text-[10px] font-label tracking-[0.1em] text-slate-500 uppercase">Management Portal</p>
      </div>
    </div>
  </div>
  <nav class="flex-1 px-4 space-y-1">
    <a class="flex items-center gap-3 text-[#546253] font-bold bg-[#ffffff] rounded-lg shadow-sm px-4 py-3 ml-2 transition-all" href="#">
      <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>
      <span class="font-label text-sm tracking-wide">Dashboard</span>
    </a>
    <a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:text-[#546253] hover:translate-x-1 transition-all" href="#">
      <span class="material-symbols-outlined">group</span>
      <span class="font-label text-sm tracking-wide">Clients</span>
    </a>
    <a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:text-[#546253] hover:translate-x-1 transition-all" href="#">
      <span class="material-symbols-outlined">badge</span>
      <span class="font-label text-sm tracking-wide">Staff</span>
    </a>
    <a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:text-[#546253] hover:translate-x-1 transition-all" href="#">
      <span class="material-symbols-outlined">analytics</span>
      <span class="font-label text-sm tracking-wide">Analytics</span>
    </a>
  </nav>
  <div class="mt-auto px-4 space-y-1">
    <button class="w-full mb-6 bg-primary text-on-primary py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity">
      <span class="material-symbols-outlined">add</span>
      <span>New Entry</span>
    </button>
    <a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:text-[#546253] transition-all" href="#">
      <span class="material-symbols-outlined">settings</span>
      <span class="font-label text-sm tracking-wide">Settings</span>
    </a>
    <a class="flex items-center gap-3 text-slate-500 px-4 py-3 hover:text-[#546253] transition-all" href="#">
      <span class="material-symbols-outlined">contact_support</span>
      <span class="font-label text-sm tracking-wide">Support</span>
    </a>
  </div>
</aside>

<!-- Main Content Area -->
<main class="md:ml-64 min-h-screen">
  <!-- TopNavBar -->
  <header class="bg-[#f8f9fa] shadow-[0px_20px_40px_rgba(25,28,29,0.06)] flex justify-between items-center w-full px-8 py-4 h-16 sticky top-0 z-50">
    <div class="flex items-center gap-4">
      <div class="relative">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
        <input class="bg-surface-container-low border-none rounded-full pl-10 pr-4 py-2 text-sm w-64 focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="Search restorative services..." type="text"/>
      </div>
    </div>
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-4">
        <button class="text-slate-500 hover:bg-[#f3f4f5] p-2 rounded-full transition-colors relative">
          <span class="material-symbols-outlined">notifications</span>
          <span class="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
        </button>
        <button class="text-slate-500 hover:bg-[#f3f4f5] p-2 rounded-full transition-colors">
          <span class="material-symbols-outlined">help_outline</span>
        </button>
      </div>
      <div class="h-8 w-[1px] bg-outline-variant/30"></div>
      <div class="flex items-center gap-3">
        <img alt="Administrator profile avatar" class="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOgw2X5oTlYLlBTjFUxXK8b2vInH5kw2um64MY2P8DcES-RQfr37BER3ScVZRB2tOnH6BQHoH6XZYzsxeJ35BGJqke5aeUV9qeCuoPRi_keO5XzWN9yJqGYSxdBcv3jic6xKUE9pBSE5YxY5gvyk9IT_8WmUkyYGcz6C18Q2FShB5Y_HvQBncyN_UkfKkStW_KE1_4k8XOPjlJPSYlOV6WT2Qojvg0socZ74sGalEJP8lPh963Dgm7yjr8yrvps9NDmnnU8JFkBPA"/>
        <div class="hidden lg:block">
          <p class="text-xs font-bold text-on-surface">Alex Rivera</p>
          <p class="text-[10px] text-slate-500">Master Admin</p>
        </div>
      </div>
    </div>
  </header>

  <!-- Canvas Content -->
  <div class="px-8 py-10 max-w-7xl mx-auto">
    <!-- Hero Header Section -->
    <section class="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
      <div class="space-y-2">
        <span class="text-primary font-label text-sm font-bold tracking-widest uppercase">System Overview</span>
        <h1 class="text-4xl md:text-5xl font-headline font-extrabold tracking-tight text-on-surface">Welcome to Restorative Admin</h1>
        <p class="text-slate-500 text-lg max-w-xl">Your wellness center is currently quiet. Start by adding your first client or exploring your new management toolkit.</p>
      </div>
      <div class="flex items-center gap-4">
        <button class="px-6 py-3 bg-surface-container-high text-primary font-bold rounded-xl flex items-center gap-2 hover:bg-surface-container-highest transition-all group">
          <span class="material-symbols-outlined group-hover:scale-110 transition-transform">ios_share</span>
          Export
        </button>
        <button class="px-8 py-3 bg-gradient-to-br from-primary to-primary-container text-white font-bold rounded-xl flex items-center gap-2 shadow-xl shadow-primary/30 hover:opacity-90 transition-all group">
          <span class="material-symbols-outlined group-hover:rotate-90 transition-transform">calendar_add_on</span>
          Add New Booking
        </button>
      </div>
    </section>

    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Large Chart Placeholder -->
      <div class="md:col-span-8 bg-surface-container-lowest p-8 rounded-2xl flex flex-col items-center justify-center min-h-[400px] shadow-[0px_20px_40px_rgba(25,28,29,0.06)] relative overflow-hidden">
        <div class="absolute inset-0 opacity-5 flex items-end justify-center pointer-events-none">
          <svg class="w-full h-48 text-primary" preserveAspectRatio="none" viewBox="0 0 1000 200">
            <path d="M0,150 Q250,50 500,150 T1000,50" fill="none" stroke="currentColor" stroke-width="4"></path>
          </svg>
        </div>
        <div class="bg-primary-fixed w-16 h-16 rounded-full flex items-center justify-center text-primary mb-6">
          <span class="material-symbols-outlined text-3xl">bar_chart</span>
        </div>
        <h3 class="text-xl font-headline font-bold mb-2">No activity detected yet</h3>
        <p class="text-slate-500 text-center max-w-xs mb-8">Once your clients start booking sessions, your weekly activity chart will appear here with rich insights.</p>
        <button class="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform">
          Explore demo data <span class="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>

      <!-- Secondary Metric Placeholder -->
      <div class="md:col-span-4 space-y-6">
        <div class="bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_20px_40px_rgba(25,28,29,0.06)] flex flex-col h-[188px] justify-center text-center">
          <span class="material-symbols-outlined text-secondary text-3xl mb-3">monitoring</span>
          <h4 class="text-sm font-label font-bold text-slate-400 uppercase tracking-widest mb-1">Total Revenue</h4>
          <p class="text-3xl font-headline font-black text-on-surface">$0.00</p>
          <p class="text-xs text-slate-400 mt-2 italic">Waiting for first transaction</p>
        </div>
        <div class="bg-surface-container-lowest p-8 rounded-2xl shadow-[0px_20px_40px_rgba(25,28,29,0.06)] flex flex-col h-[188px] justify-center text-center">
          <span class="material-symbols-outlined text-primary text-3xl mb-3">person_add</span>
          <h4 class="text-sm font-label font-bold text-slate-400 uppercase tracking-widest mb-1">New Registrations</h4>
          <p class="text-3xl font-headline font-black text-on-surface">0</p>
          <p class="text-xs text-slate-400 mt-2 italic">Invite your first client via email</p>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="md:col-span-12 bg-surface-container-low rounded-2xl p-1 overflow-hidden">
        <div class="bg-surface-container-lowest rounded-2xl p-8">
          <div class="flex items-center justify-between mb-8">
            <h3 class="text-xl font-headline font-bold">Upcoming Appointments</h3>
            <span class="bg-primary-fixed text-primary px-3 py-1 rounded-full text-xs font-bold">Upcoming: 0</span>
          </div>
          <div class="flex flex-col items-center justify-center py-20 border-2 border-dashed border-outline-variant/30 rounded-xl">
            <div class="w-20 h-20 bg-surface-container-low rounded-2xl flex items-center justify-center mb-4">
              <span class="material-symbols-outlined text-4xl text-outline">event_busy</span>
            </div>
            <p class="text-lg font-headline font-bold text-on-surface">Your schedule is clear</p>
            <p class="text-slate-500 mb-6">There are no upcoming appointments scheduled for this week.</p>
            <button class="px-6 py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
              Setup Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

<!-- Mobile Bottom NavBar -->
<div class="md:hidden fixed bottom-0 left-0 right-0 bg-[#ffffff] h-16 flex items-center justify-around px-4 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50">
  <a class="flex flex-col items-center gap-1 text-primary" href="#">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">dashboard</span>
    <span class="text-[10px] font-bold">Overview</span>
  </a>
  <a class="flex flex-col items-center gap-1 text-slate-400" href="#">
    <span class="material-symbols-outlined">group</span>
    <span class="text-[10px] font-medium">Clients</span>
  </a>
  <button class="bg-primary text-white w-12 h-12 rounded-full -mt-10 border-4 border-surface shadow-lg flex items-center justify-center">
    <span class="material-symbols-outlined">add</span>
  </button>
  <a class="flex flex-col items-center gap-1 text-slate-400" href="#">
    <span class="material-symbols-outlined">badge</span>
    <span class="text-[10px] font-medium">Staff</span>
  </a>
  <a class="flex flex-col items-center gap-1 text-slate-400" href="#">
    <span class="material-symbols-outlined">analytics</span>
    <span class="text-[10px] font-medium">Data</span>
  </a>
</div>
`;

  return (
    <div
      className="bg-surface text-on-surface min-h-screen"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}