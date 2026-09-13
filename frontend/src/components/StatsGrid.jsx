const stats = [
  {
    label: 'Total Nilai Buku',
    value: 'Rp 42,85 M',
    change: '+4.2% YoY',
    changeColor: 'text-secondary',
    icon: 'account_balance_wallet',
    iconBg: 'bg-surface-container-low text-secondary',
    footerLabel: 'Nilai Perolehan Awal',
    footerValue: 'Rp 58,40 M',
  },
  {
    label: 'Total Inventaris Terdata',
    value: '4.829',
    unit: 'Unit',
    change: '92.4% Aktif Operasional',
    changeColor: 'text-on-surface',
    icon: 'devices_other',
    iconBg: 'bg-surface-container-low text-secondary',
    footerLabel: 'Unit Standby Gudang',
    footerValue: '184 Unit Siap Pakai',
    footerColor: 'text-secondary',
  },
  {
    label: 'Tiket Pemeliharaan Aktif',
    value: '28',
    unit: 'Tiket',
    change: '6 Kritis / Overdue',
    changeColor: 'text-error',
    icon: 'build',
    iconBg: 'bg-surface-container-low text-error',
    footerLabel: 'Preventif Terjadwal Pekan Ini',
    footerValue: '8 Tiket',
  },
  {
    label: 'Peminjaman & Approval',
    value: '142',
    unit: 'Aset Dipinjam',
    change: '12 Menunggu Persetujuan',
    changeColor: 'text-on-surface',
    icon: 'assignment_turned_in',
    iconBg: 'bg-surface-container-low text-secondary',
    footerLabel: 'Melewati Batas Tempo',
    footerValue: '5 Karyawan',
    footerColor: 'text-error',
  },
]

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-space-lg">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between group hover:shadow-md transition-shadow">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline">{stat.label}</span>
              <div className={`w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center ${stat.iconBg}`}>
                <span className="material-symbols-outlined text-[18px]">{stat.icon}</span>
              </div>
            </div>
            <div className="mt-space-md">
              <div className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
                {stat.value}{' '}
                {stat.unit && <span className="font-headline-sm text-headline-sm font-normal text-outline">{stat.unit}</span>}
              </div>
              <div className="flex items-center gap-space-xs mt-space-xs">
                <span className={`inline-flex items-center gap-0.5 ${stat.changeColor} font-label-sm text-label-sm font-semibold`}>
                  {stat.label === 'Total Nilai Buku' && <span className="material-symbols-outlined text-[16px]">arrow_upward</span>}
                  {stat.change}
                </span>
                {stat.label === 'Total Nilai Buku' && <span className="text-outline font-body-sm text-body-sm">vs Q2 2024</span>}
              </div>
            </div>
          </div>
          <div className={`mt-space-lg pt-space-md bg-surface-container-low/50 -mx-space-lg -mb-space-lg p-space-lg rounded-b-xl flex items-center justify-between`}>
            <span className="font-label-sm text-label-sm text-outline">{stat.footerLabel}</span>
            <span className={`font-label-sm text-label-sm font-semibold ${stat.footerColor || 'text-on-surface'}`}>{stat.footerValue}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
