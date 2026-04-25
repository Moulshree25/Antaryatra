// src/app/clients/page.tsx
// HTML pasted as-is from Stitch via dangerouslySetInnerHTML. DO NOT convert to JSX.

export default function ClientsPage() {
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
        <p class="text-[10px] uppercase tracking-widest text-slate-500">Management Portal</p>
      </div>
    </div>
  </div>
  <nav class="flex-1 flex flex-col px-4 gap-y-1">
    <a class="text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all hover:translate-x-1 duration-200" href="#">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined">dashboard</span>
        <span>Dashboard</span>
      </div>
    </a>
    <a class="text-[#546253] dark:text-[#9aa998] font-bold bg-[#ffffff] dark:bg-slate-900 rounded-lg shadow-sm px-4 py-3 ml-2 flex items-center gap-3" href="#">
      <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">group</span>
      <span>Clients</span>
    </a>
    <a class="text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all hover:translate-x-1 duration-200" href="#">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined">badge</span>
        <span>Staff</span>
      </div>
    </a>
    <a class="text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all hover:translate-x-1 duration-200" href="#">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined">analytics</span>
        <span>Analytics</span>
      </div>
    </a>
  </nav>
  <div class="mt-auto px-4 flex flex-col gap-y-1 border-t border-outline-variant/10 pt-6">
    <a class="text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all hover:translate-x-1 duration-200" href="#">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined">settings</span>
        <span>Settings</span>
      </div>
    </a>
    <a class="text-slate-500 dark:text-slate-400 px-4 py-3 hover:text-[#546253] dark:hover:text-white transition-all hover:translate-x-1 duration-200" href="#">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined">contact_support</span>
        <span>Support</span>
      </div>
    </a>
  </div>
</aside>

<!-- Main Canvas -->
<main class="md:ml-64 min-h-screen flex flex-col">
  <!-- TopNavBar -->
  <header class="flex justify-between items-center w-full px-8 py-4 h-16 bg-[#f8f9fa] dark:bg-slate-900 shadow-[0px_20px_40px_rgba(25,28,29,0.06)] sticky top-0 z-50">
    <div class="flex items-center gap-4">
      <div class="relative">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
        <input class="bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm w-64 focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="Search records..." type="text"/>
      </div>
    </div>
    <div class="flex items-center gap-6">
      <div class="flex items-center gap-4">
        <button class="p-2 rounded-full text-slate-500 hover:bg-[#f3f4f5] transition-colors relative">
          <span class="material-symbols-outlined">notifications</span>
          <span class="absolute top-2 right-2 w-2 h-2 bg-secondary rounded-full"></span>
        </button>
        <button class="p-2 rounded-full text-slate-500 hover:bg-[#f3f4f5] transition-colors">
          <span class="material-symbols-outlined">help_outline</span>
        </button>
      </div>
      <div class="h-8 w-[1px] bg-outline-variant/30"></div>
      <div class="flex items-center gap-3">
        <div class="text-right hidden sm:block">
          <p class="text-xs font-bold text-on-surface">Admin User</p>
          <p class="text-[10px] text-slate-500">Wellness Director</p>
        </div>
        <img alt="Administrator profile avatar" class="w-10 h-10 rounded-full border-2 border-primary-container/20 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn9ksre4UmqdCovo_TtOgCFCM8pijT853Mzkc4zbfTySeP7ifIiIyqpfdOuGh7gr_wegcjj-nPE3sZJdv9JDXN_PdWkWSv16kp40KxgGpcyuSVeFWDS_QR0UjuxHEc7CXk2EZFEMgsiBJIY-TN2h5afyGd12Ta5dwHQhthwc_lVRZdNkxnMcTJSM1S_MPXrBJsUVrFDnJGq1XwlkRQi--ahq-wV2e5n7KtD0KlWWPB9m0k4x9ozAckW-iyl9p2cPTdxGfEwXN7Pmk"/>
      </div>
    </div>
  </header>

  <!-- Content Area -->
  <div class="p-8 md:p-12 max-w-7xl mx-auto w-full">
    <!-- Page Header -->
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
      <div class="space-y-2">
        <span class="text-primary font-bold tracking-[0.2em] text-[10px] uppercase font-label">Wellness Directory</span>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface font-headline">Client Management</h1>
      </div>
      <div>
        <button class="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 group">
          <span class="material-symbols-outlined transition-transform group-hover:scale-110">person_add</span>
          Register New Client
        </button>
      </div>
    </div>

    <!-- Main Layout -->
    <div class="grid grid-cols-1 gap-8">
      <!-- Table Header -->
      <div class="bg-surface-container-low rounded-t-2xl px-8 py-6 border-b border-outline-variant/10">
        <div class="grid grid-cols-4 text-xs font-bold tracking-widest text-primary uppercase font-label">
          <span>Client Identity</span>
          <span>Registration Date</span>
          <span>Program Status</span>
          <span class="text-right">Actions</span>
        </div>
      </div>

      <!-- Empty State Container -->
      <div class="bg-surface-container-lowest rounded-b-2xl shadow-sm min-h-[500px] flex flex-col items-center justify-center p-12 text-center overflow-hidden relative">
        <!-- Decorative Background -->
        <div class="absolute top-0 left-0 w-64 h-64 bg-primary-fixed/30 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div class="absolute bottom-0 right-0 w-80 h-80 bg-secondary-fixed/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div class="relative z-10 max-w-md flex flex-col items-center">
          <div class="w-48 h-48 mb-8 relative">
            <div class="absolute inset-0 bg-primary/5 rounded-full scale-110 blur-xl"></div>
            <img alt="Peaceful botanical abstract" class="w-full h-full object-cover rounded-full shadow-2xl border-8 border-white/50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtGwhKUBE6Yb5b5rDLgnFjwFeA9IQ3VxPZOjbA2kX74O5Nel_Uh1UwtbA6QhhAnr58134FtNJAeOVnaaL-1qFMpN4eJzERPnTowX-QMbVuy3VFl0q4QtC_sQwYLJpUb6SwEI4mrdHjTsu8YU5A4bmd9vLiwutiaokBDVI4yf5JN2IAL5jN43TGYBudXCmvNjrpJ_JcLiNrBUfIUA0x3Wd1NjxM5v4tKXGrkw5J9DA4iwKyoDYuTnC1IZixqz7fI6KFYz7JGvXjPPU"/>
            <div class="absolute -bottom-2 -right-2 bg-secondary-container text-on-secondary w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
              <span class="material-symbols-outlined text-3xl">groups</span>
            </div>
          </div>
          <h2 class="text-2xl font-bold text-on-surface mb-3 font-headline">Your client list is currently empty.</h2>
          <p class="text-on-surface-variant leading-relaxed mb-10 font-body">
            Start building your wellness community by adding your first participant. Manage schedules, progress, and personalized care from one serene space.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 w-full">
            <button class="flex-1 bg-surface-container-high hover:bg-surface-container-highest text-primary font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2">
              <span class="material-symbols-outlined">upload_file</span>
              Import CSV
            </button>
            <button class="flex-1 bg-primary text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              <span class="material-symbols-outlined">add</span>
              Quick Add
            </button>
          </div>
          <div class="mt-12 flex items-center gap-2 text-slate-400">
            <span class="material-symbols-outlined text-sm">info</span>
            <p class="text-xs font-medium">Need help onboarding clients? <a class="text-primary hover:underline" href="#">View the guide</a></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="mt-auto py-12 px-8 text-center text-slate-400">
      <p class="text-xs font-medium uppercase tracking-[0.3em]">Restorative Admin © 2024</p>
    </footer>
  </div>
</main>

<!-- Mobile Navigation -->
<nav class="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.05)] h-20 flex items-center justify-around px-4 z-50">
  <button class="flex flex-col items-center gap-1 text-slate-400">
    <span class="material-symbols-outlined">dashboard</span>
    <span class="text-[10px] font-bold">Home</span>
  </button>
  <button class="flex flex-col items-center gap-1 text-primary">
    <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">group</span>
    <span class="text-[10px] font-bold">Clients</span>
  </button>
  <div class="-translate-y-6">
    <button class="bg-primary text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center">
      <span class="material-symbols-outlined text-3xl">add</span>
    </button>
  </div>
  <button class="flex flex-col items-center gap-1 text-slate-400">
    <span class="material-symbols-outlined">badge</span>
    <span class="text-[10px] font-bold">Staff</span>
  </button>
  <button class="flex flex-col items-center gap-1 text-slate-400">
    <span class="material-symbols-outlined">settings</span>
    <span class="text-[10px] font-bold">Settings</span>
  </button>
</nav>
`;

  return (
    <div
      className="bg-surface text-on-surface min-h-screen"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}