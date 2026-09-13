import { useState } from 'react'

const menuItems = [
  { icon: 'dashboard', label: 'Dashboard Eksekutif', path: 'dashboard-eksekutif', active: false },
  { icon: 'inventory_2', label: 'Inventaris & Katalog', path: 'inventaris-katalog-aset', active: true },
  { icon: 'build_circle', label: 'Pemeliharaan & Tiket', path: 'pemeliharaan-tiket', active: false },
  { icon: 'fact_check', label: 'Peminjaman & Approval', path: 'peminjaman-approval', active: false },
  { icon: 'monitoring', label: 'Depresiasi & Finansial', path: 'depresiasi-keuangan', active: false },
  { icon: 'history_edu', label: 'Audit & Log Aktivitas', path: 'audit-log-aktivitas', active: false },
]

export default function Sidebar({ open, onClose, currentPath, onNavigate }) {
  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/40 z-40 lg:hidden" onClick={onClose}></div>
      )}
      <aside
        className={`fixed left-0 top-0 h-full w-64 bg-primary-container z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] transition-transform duration-300 ease-in-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="flex flex-col">
          <div className="h-16 px-space-xl flex items-center gap-space-md border-b border-outline/15 overflow-hidden">
            <img
              alt="AssetCore Enterprise Logo"
              className="h-8 w-8 object-contain shrink-0"
              src="/assetcore-logo.svg"
            />
            <div className="flex flex-col min-w-0">
              <span className="font-headline-sm text-headline-sm text-on-primary tracking-tight truncate">AssetCore</span>
              <span className="font-label-sm text-label-sm text-on-primary-container leading-none truncate">Enterprise EAM</span>
            </div>
          </div>
          <div className="px-space-md py-space-lg">
            <div className="px-space-md pb-space-sm font-label-sm text-label-sm text-on-primary-container tracking-wider uppercase font-semibold">
              Menu Operasional
            </div>
            <nav className="space-y-space-2xs">
              {menuItems.map((item) => (
                <a
                  key={item.path}
                  href="#"
                  aria-current={item.active || currentPath === item.path ? 'page' : undefined}
                  onClick={(e) => { e.preventDefault(); onNavigate(item.path); onClose?.() }}
                  className={`flex items-center gap-space-md px-space-md py-space-sm rounded-lg transition-all font-body-sm text-body-sm ${
                    currentPath === item.path
                      ? 'bg-secondary text-on-secondary shadow-[0_0_12px_rgba(85,101,242,0.35)] font-semibold'
                      : 'text-on-primary-container hover:bg-surface-container-highest/10 hover:text-on-primary'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px] shrink-0">{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </a>
              ))}
            </nav>
          </div>
        </div>
        <div className="p-space-md border-t border-outline/15 bg-primary-container">
          <div className="flex items-center justify-between p-space-sm rounded-lg bg-tertiary-container">
            <div className="flex items-center gap-space-sm min-w-0">
              <span className="material-symbols-outlined text-[18px] text-on-tertiary-container shrink-0">cloud_done</span>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-on-primary truncate">Database Node-01</span>
                <span className="font-label-sm text-label-sm text-on-tertiary-container truncate">99.98% Sinkron</span>
              </div>
            </div>
            <span className="inline-flex w-2 h-2 rounded-full bg-secondary shrink-0"></span>
          </div>
        </div>
      </aside>
    </>
  )
}
