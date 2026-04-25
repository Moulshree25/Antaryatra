// src/app/admin/page.tsx
// DO NOT convert to JSX. HTML is pasted as-is via dangerouslySetInnerHTML.

export default function AdminPage() {
  const html = `
<!-- SideNavBar -->
<aside class="fixed left-0 top-0 h-full flex flex-col p-4 border-r-0 bg-slate-50 dark:bg-slate-950 w-64 z-40">
  <div class="mb-8 px-4 py-6">
    <h1 class="font-manrope font-extrabold text-emerald-900 dark:text-emerald-50 text-xl tracking-tight">Restorative Canvas</h1>
    <p class="text-xs text-slate-500 font-medium uppercase tracking-widest mt-1">Management Portal</p>
  </div>
  <nav class="flex-1 space-y-1">
    <a class="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-800 text-emerald-700 dark:text-emerald-400 shadow-sm rounded-lg font-inter text-sm font-medium transition-all duration-200 ease-in-out" href="#">
      <span class="material-symbols-outlined" data-icon="calendar_month">calendar_month</span>
      <span>Bookings</span>
    </a>
    <a class="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-inter text-sm font-medium transition-all duration-200 ease-in-out" href="#">
      <span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
      <span>Dashboard</span>
    </a>
    <a class="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-inter text-sm font-medium transition-all duration-200 ease-in-out" href="#">
      <span class="material-symbols-outlined" data-icon="group">group</span>
      <span>Clients</span>
    </a>
    <a class="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-inter text-sm font-medium transition-all duration-200 ease-in-out" href="#">
      <span class="material-symbols-outlined" data-icon="badge">badge</span>
      <span>Staff</span>
    </a>
    <a class="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 font-inter text-sm font-medium transition-all duration-200 ease-in-out" href="#">
      <span class="material-symbols-outlined" data-icon="insights">insights</span>
      <span>Analytics</span>
    </a>
  </nav>
  <div class="mt-auto pt-4 space-y-1">
    <a class="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-emerald-600 font-inter text-sm font-medium transition-all duration-200 ease-in-out" href="#">
      <span class="material-symbols-outlined" data-icon="help">help</span>
      <span>Help Center</span>
    </a>
    <a class="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-emerald-600 font-inter text-sm font-medium transition-all duration-200 ease-in-out" href="#">
      <span class="material-symbols-outlined" data-icon="logout">logout</span>
      <span>Logout</span>
    </a>
  </div>
</aside>

<!-- Main Content Canvas -->
<main class="ml-64 flex-1 flex flex-col min-h-screen">
  <!-- TopNavBar -->
  <header class="flex justify-between items-center px-8 py-3 w-full sticky top-0 z-50 bg-surface dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none">
    <div class="flex items-center gap-6 flex-1">
      <div class="relative w-full max-w-md">
        <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
        <input class="w-full pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-xl text-sm focus:ring-1 focus:ring-primary focus:bg-surface-container-lowest transition-all" placeholder="Search bookings" type="text"/>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <div class="flex items-center gap-2">
        <button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-95 duration-150">
          <span class="material-symbols-outlined" data-icon="notifications">notifications</span>
        </button>
        <button class="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors active:scale-95 duration-150">
          <span class="material-symbols-outlined" data-icon="settings">settings</span>
        </button>
      </div>
      <div class="h-8 w-[1px] bg-outline-variant opacity-30 mx-2"></div>
      <div class="flex items-center gap-3">
        <div class="text-right hidden sm:block">
          <p class="text-xs font-bold font-headline text-on-surface leading-tight">Admin User</p>
          <p class="text-[10px] text-slate-500 font-medium">Wellness Center</p>
        </div>
        <img alt="Administrator profile picture" class="w-10 h-10 rounded-full object-cover border-2 border-primary-fixed-dim" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4iuWzDaI-A9nO9VWg0yNw9qJ7O63gdALOK60A_ytNUgdjfI79b-yuDiXJYQ7qxJlFuM5QDcTKEzUFzNc96wrXFP_JZLZmLr0OY8xVIDFFDUvJA_uCG6fdZZMAAV6NGyYQPl0r71kaidbOYVJAu4fs2uXbi8xvIudDVxNXahhZ6V5sMfKp1kjgd0B1VEG8PL9NtdctR9hkhpkViWK088UxeeX0fVKUR4BMTpJjUZ8TMRV0DWQRsPrmmnMi9S3cMs0ehmv05whcheY"/>
      </div>
    </div>
  </header>

  <!-- Content Area -->
  <div class="p-8 space-y-8">
    <!-- Header Section -->
    <div class="flex justify-between items-end">
      <div>
        <h2 class="text-3xl font-headline font-bold text-on-surface tracking-tight">Booking Overview</h2>
        <p class="text-tertiary font-body mt-1">Manage and track upcoming restorative sessions</p>
      </div>
      <div class="flex gap-3">
        <button class="px-5 py-2.5 bg-surface-container-high text-on-surface text-sm font-medium rounded-xl hover:bg-surface-container-highest transition-colors">
          Export Report
        </button>
        <button class="px-5 py-2.5 bg-primary text-on-primary text-sm font-medium rounded-xl flex items-center gap-2 shadow-sm hover:opacity-90 transition-all active:scale-95">
          <span class="material-symbols-outlined text-sm">add</span>
          New Booking
        </button>
      </div>
    </div>

    <!-- Main Data Table Container -->
    <div class="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/15">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-surface-container-low/50">
              <th class="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider font-label">Name</th>
              <th class="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider font-label">Email</th>
              <th class="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider font-label">Mode</th>
              <th class="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider font-label">Goal</th>
              <th class="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider font-label">Date</th>
              <th class="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider font-label">Status</th>
              <th class="px-6 py-4 text-xs font-bold text-primary uppercase tracking-wider font-label text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-surface-container-low">
            <!-- Row 1 -->
            <tr class="hover:bg-surface-container-high/30 transition-colors group">
              <td class="px-6 py-5">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed font-bold text-xs">AS</div>
                  <span class="font-medium text-on-surface text-sm">Amara Singh</span>
                </div>
              </td>
              <td class="px-6 py-5 text-sm text-tertiary">amara.s@wellness.com</td>
              <td class="px-6 py-5">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-fixed text-on-primary-fixed-variant">
                  Online
                </span>
              </td>
              <td class="px-6 py-5 text-sm text-on-surface">Stress Reduction</td>
              <td class="px-6 py-5 text-sm text-tertiary">Oct 24, 2026</td>
              <td class="px-6 py-5">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-fixed text-on-secondary-fixed-variant">
                  Contacted
                </span>
              </td>
              <td class="px-6 py-5 text-right">
                <div class="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button class="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Mark as Contacted">
                    <span class="material-symbols-outlined text-xl" style="font-variation-settings: 'FILL' 1;">check_circle</span>
                  </button>
                  <button class="p-2 text-error hover:bg-error/10 rounded-lg transition-colors" title="Delete">
                    <span class="material-symbols-outlined text-xl">delete</span>
                  </button>
                </div>
              </td>
            </tr>
            <!-- Row 2 -->
            <tr class="hover:bg-surface-container-high/30 transition-colors group">
              <td class="px-6 py-5">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-secondary-fixed-dim flex items-center justify-center text-on-secondary-container font-bold text-xs">JM</div>
                  <span class="font-medium text-on-surface text-sm">Julian Moore</span>
                </div>
              </td>
              <td class="px-6 py-5 text-sm text-tertiary">j.moore@studio.io</td>
              <td class="px-6 py-5">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-tertiary-fixed text-on-tertiary-fixed-variant">
                  Offline
                </span>
              </td>
              <td class="px-6 py-5 text-sm text-on-surface">Deep Sleep Therapy</td>
              <td class="px-6 py-5 text-sm text-tertiary">Oct 25, 2026</td>
              <td class="px-6 py-5">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-container-high text-outline">
                  Not Contacted
                </span>
              </td>
              <td class="px-6 py-5 text-right">
                <div class="flex justify-end gap-2">
                  <button class="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors" title="Mark as Contacted">
                    <span class="material-symbols-outlined text-xl">check_circle</span>
                  </button>
                  <button class="p-2 text-error hover:bg-error/10 rounded-lg transition-colors" title="Delete">
                    <span class="material-symbols-outlined text-xl">delete</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- States Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Loading State Card -->
      <div class="bg-surface-container-lowest p-12 rounded-xl border border-outline-variant/15 flex flex-col items-center justify-center space-y-4">
        <div class="relative">
          <div class="w-12 h-12 border-4 border-primary-fixed border-t-primary rounded-full animate-spin"></div>
        </div>
        <div class="text-center">
          <p class="font-headline font-bold text-on-surface">Syncing Records</p>
          <p class="text-sm text-tertiary">Updating your restorative journey data...</p>
        </div>
      </div>
      <!-- Empty State Card -->
      <div class="bg-surface-container-lowest p-12 rounded-xl border border-outline-variant/15 flex flex-col items-center justify-center text-center">
        <div class="w-24 h-24 mb-6 relative overflow-hidden rounded-full">
          <div class="absolute inset-0 bg-primary-fixed opacity-20"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="material-symbols-outlined text-primary text-5xl opacity-40">calendar_today</span>
          </div>
        </div>
        <h3 class="text-lg font-headline font-bold text-on-surface">No bookings yet</h3>
        <p class="text-sm text-tertiary max-w-xs mx-auto mt-2">When clients schedule their sessions, they'll appear here in your restorative workspace.</p>
        <button class="mt-6 px-6 py-2 text-primary text-sm font-semibold border border-primary rounded-xl hover:bg-primary/5 transition-colors">
          Add First Booking
        </button>
      </div>
    </div>

    <!-- Bento Statistics -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="md:col-span-2 bg-primary text-on-primary p-8 rounded-2xl relative overflow-hidden">
        <div class="relative z-10">
          <h4 class="text-xs uppercase tracking-widest opacity-80 font-bold mb-4">Capacity Pulse</h4>
          <div class="flex items-baseline gap-2">
            <span class="text-5xl font-headline font-extrabold tracking-tighter">84%</span>
            <span class="text-sm opacity-70">Engagement Rate</span>
          </div>
          <p class="mt-4 text-sm max-w-sm opacity-90 leading-relaxed">Your bookings have increased by 12% this week. Most sessions are trending toward online meditation therapy.</p>
        </div>
        <div class="absolute right-0 bottom-0 top-0 w-1/3 bg-gradient-to-l from-white/10 to-transparent"></div>
      </div>
      <div class="bg-secondary-fixed p-8 rounded-2xl flex flex-col justify-between">
        <div>
          <span class="material-symbols-outlined text-on-secondary-container mb-4">bolt</span>
          <h4 class="text-on-secondary-container font-headline font-bold text-lg">Vital Action</h4>
        </div>
        <div>
          <p class="text-on-secondary-fixed-variant text-sm font-medium">3 clients awaiting initial contact for deep-sleep sessions.</p>
          <a class="text-secondary font-bold text-sm mt-4 inline-flex items-center gap-1 group" href="#">
            Respond now
            <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="mt-auto px-8 py-6 border-t border-outline-variant/10 flex justify-between items-center text-[10px] text-tertiary font-label uppercase tracking-widest font-bold">
    <div>© 2024 Antaryatra Wellness Management</div>
    <div class="flex gap-6">
      <a class="hover:text-primary transition-colors" href="#">Privacy</a>
      <a class="hover:text-primary transition-colors" href="#">Protocol</a>
      <a class="hover:text-primary transition-colors" href="#">Support</a>
    </div>
  </footer>
</main>

<!-- FAB -->
<button class="fixed bottom-8 right-8 w-14 h-14 bg-primary-container text-on-primary-container rounded-full shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform group z-50">
  <span class="material-symbols-outlined" data-icon="add">add</span>
  <span class="absolute right-16 bg-on-surface text-surface text-xs py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">Quick Booking</span>
</button>
`;

  return (
    <div
      className="bg-surface text-on-surface flex min-h-screen"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}