import { useState } from 'react'
import Sidebar from './Sidebar'

export default function Header({ onToggleSidebar }) {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 lg:left-64 bg-surface-container-lowest z-40 px-space-xl flex items-center justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex items-center gap-space-lg flex-1 max-w-2xl">
        <button
          className="lg:hidden p-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
          type="button"
          onClick={onToggleSidebar}
        >
          <span className="material-symbols-outlined text-[22px]">menu</span>
        </button>
        <div className="relative flex-1">
          <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-[20px] text-outline">search</span>
          <input
            className="w-full h-10 pl-10 pr-16 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-secondary"
            placeholder="Cari aset, serial number, lokasi, SKU..."
            type="text"
          />
          <div className="absolute right-space-sm top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-space-2xs">
            <kbd className="px-space-xs py-space-2xs bg-surface-container-high rounded text-outline font-code-sm text-code-sm font-semibold">Ctrl</kbd>
            <kbd className="px-space-xs py-space-2xs bg-surface-container-high rounded text-outline font-code-sm text-code-sm font-semibold">K</kbd>
          </div>
        </div>
        <button className="hidden md:flex items-center gap-space-xs h-10 px-space-md bg-surface-container-low hover:bg-surface-container hover:text-on-surface text-on-surface-variant rounded-lg font-label-md text-label-md transition-colors" type="button">
          <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
          <span>Scan QR</span>
        </button>
        <div className="hidden lg:flex items-center gap-space-xs h-10 px-space-md bg-surface-container-low rounded-lg text-on-surface-variant">
          <span className="material-symbols-outlined text-[18px] text-outline">domain</span>
          <span className="font-label-md text-label-md text-on-surface truncate max-w-[170px]">Kantor Pusat Jakarta - Gedung A</span>
          <span className="material-symbols-outlined text-[16px] text-outline">expand_more</span>
        </div>
      </div>
      <div className="flex items-center gap-space-lg">
        <button className="relative p-space-sm rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
          <span className="material-symbols-outlined text-[22px]">notifications</span>
          <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-error opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-error"></span>
          </span>
        </button>
        <button className="hidden sm:flex items-center gap-space-xs h-10 px-space-lg bg-secondary hover:bg-secondary-container text-on-secondary rounded-lg font-label-md text-label-md font-semibold transition-colors shadow-[0_1px_3px_rgba(9,21,64,0.08)]" type="button">
          <span className="material-symbols-outlined text-[18px]">add_circle</span>
          <span>Tambah Aset</span>
        </button>
        <div className="hidden lg:block h-8 w-px bg-surface-container-high"></div>
        <div className="hidden lg:flex items-center gap-space-md">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-on-secondary font-semibold text-sm">PH</div>
          <div className="flex flex-col text-left">
            <span className="font-label-md text-label-md text-on-surface leading-tight">Pratama Hadi</span>
            <span className="inline-flex items-center font-label-sm text-label-sm text-secondary font-semibold leading-none mt-0.5">Super Admin</span>
          </div>
        </div>
      </div>
    </header>
  )
}
