const actions = [
  { icon: 'qr_code_scanner', title: 'Scan Fisik QR', subtitle: 'Audit Lapangan', color: 'bg-surface-container-highest/15 hover:bg-surface-container-highest/25 text-on-primary' },
  { icon: 'add_task', title: 'Work Order Cepat', subtitle: 'Tiket Insiden Baru', color: 'bg-surface-container-highest/15 hover:bg-surface-container-highest/25 text-on-primary' },
  { icon: 'handshake', title: 'Pinjam Aset', subtitle: 'Form Peminjaman', color: 'bg-surface-container-highest/15 hover:bg-surface-container-highest/25 text-on-primary' },
  { icon: 'fact_check', title: 'Stock Opname', subtitle: 'Mulai Siklus Q2', color: 'bg-secondary hover:bg-secondary-container text-on-secondary shadow-sm' },
]

export default function QuickActions() {
  return (
    <div className="bg-primary-container text-on-primary p-space-xl rounded-xl shadow-md">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
        <div>
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-on-tertiary-container text-[24px]">bolt</span>
            <h4 className="font-headline-sm text-headline-sm font-semibold tracking-tight">Pusat Aksi Cepat Operasional</h4>
          </div>
          <p className="font-body-sm text-body-sm text-on-primary-container mt-1">Eksekusi audit lapangan, buat perintah kerja perbaikan instan, dan proses stok opname terpadu.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md">
          {actions.map((action) => (
            <button key={action.title} className={`flex items-center gap-space-sm px-space-lg py-space-md rounded-lg text-left transition-colors ${action.color}`} type="button">
              <span className="material-symbols-outlined text-[24px] text-primary-fixed">{action.icon}</span>
              <div>
                <span className="font-label-md text-label-md font-semibold block">{action.title}</span>
                <span className="font-label-sm text-label-sm text-on-primary-container">{action.subtitle}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
