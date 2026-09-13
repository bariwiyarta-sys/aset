const tickets = [
  {
    id: '#WO-2025-0891',
    asset: 'UPS APC Symmetra 40kVA',
    time: '10 Menit lalu',
    category: 'Ganti Battery Modul',
    pic: 'Bambang S. (Teknisi Kelistrikan)',
    cost: 'Rp 14.200.000',
    status: { label: 'Dikerjakan', color: 'bg-secondary-fixed text-on-secondary-fixed', dot: 'bg-secondary' },
  },
  {
    id: '#WO-2025-0888',
    asset: 'Mesin CNC Lathe Mazak',
    time: '1 Jam lalu',
    category: 'Overheating Spindle Motor',
    pic: 'Mitra Mazak Specialist',
    cost: 'Rp 28.500.000',
    status: { label: 'Kritis / Overdue', color: 'bg-error-container text-on-error-container', dot: 'bg-error' },
  },
  {
    id: '#WO-2025-0879',
    asset: 'AC Precision Stulz Server',
    time: '3 Jam lalu',
    category: 'Preventif Maintenance Bulanan',
    pic: 'Ahmad Fauzi (Facility Team)',
    cost: 'Rp 3.500.000',
    status: { label: 'Terjadwal', color: 'bg-surface-container-high text-on-surface-variant', dot: 'bg-outline' },
  },
  {
    id: '#WO-2025-0865',
    asset: 'Toyota Hilux Double Cabin',
    time: '5 Jam lalu',
    category: 'Servis Berkala 40.000 KM',
    pic: 'Bengkel Resmi Auto2000',
    cost: 'Rp 4.800.000',
    status: { label: 'Selesai', color: 'bg-surface-container text-on-surface', dot: 'bg-on-surface', check: true },
  },
]

export default function MaintenanceTable() {
  return (
    <div className="lg:col-span-7 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-space-md">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Aktivitas Pemeliharaan & Tiket Terkini</h3>
            <p className="font-body-sm text-body-sm text-outline">Log pengerjaan perbaikan dan kalibrasi real-time</p>
          </div>
          <button className="flex items-center gap-space-xs px-space-md py-space-xs bg-surface-container-low hover:bg-surface-container rounded-lg font-label-md text-label-md text-on-surface transition-colors" type="button">
            <span className="material-symbols-outlined text-[18px] text-outline">filter_list</span>
            <span>Semua Status</span>
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container-low font-label-sm text-label-sm text-outline uppercase tracking-wider">
                <th className="py-space-sm px-space-md rounded-l-lg">ID Tiket / Aset</th>
                <th className="py-space-sm px-space-md">Kategori & PIC</th>
                <th className="py-space-sm px-space-md">Biaya Est.</th>
                <th className="py-space-sm px-space-md">Status</th>
                <th className="py-space-sm px-space-md text-right rounded-r-lg">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high/40 font-body-sm text-body-sm">
              {tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-surface-container-low/50 transition-colors">
                  <td className="py-space-md px-space-md">
                    <div className="font-label-md text-label-md font-semibold text-on-surface">{ticket.id}</div>
                    <div className="text-outline font-label-sm text-label-sm">{ticket.asset}</div>
                    <span className="text-outline font-code-sm text-code-sm">{ticket.time}</span>
                  </td>
                  <td className="py-space-md px-space-md">
                    <div className="text-on-surface font-medium">{ticket.category}</div>
                    <div className="text-outline font-label-sm text-label-sm">{ticket.pic}</div>
                  </td>
                  <td className="py-space-md px-space-md font-code-sm text-code-sm text-on-surface font-semibold">{ticket.cost}</td>
                  <td className="py-space-md px-space-md">
                    <span className={`inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full ${ticket.status.color} font-label-sm text-label-sm font-semibold`}>
                      {ticket.status.check ? (
                        <span className="material-symbols-outlined text-[14px]">check</span>
                      ) : (
                        <span className={`w-1.5 h-1.5 rounded-full ${ticket.status.dot}`}></span>
                      )}
                      {ticket.status.label}
                    </span>
                  </td>
                  <td className="py-space-md px-space-md text-right">
                    <button className="p-space-xs rounded hover:bg-surface-container text-secondary" type="button">
                      <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex items-center justify-between pt-space-md">
        <span className="font-label-sm text-label-sm text-outline">Menampilkan 4 dari 28 aktivitas pemeliharaan aktif</span>
        <button className="font-label-md text-label-md text-secondary font-semibold hover:underline flex items-center gap-space-xs" type="button">
          <span>Lihat Semua Tiket Work Order</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
