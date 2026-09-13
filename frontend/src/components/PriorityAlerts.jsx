const alerts = [
  {
    id: 1,
    title: 'Cisco Core Catalyst 9500',
    sub: 'SN: CSCO-9500-JKT-082',
    icon: 'router',
    status: '14 Hari Lagi',
    statusColor: 'bg-error/10 text-error',
    desc: 'Garansi OEM SmartNet kedaluwarsa 25 Juni 2025. Risiko downtime infrastruktur data center gedung A.',
    actions: ['Vendor Cisco', 'Ajukan Perpanjangan'],
  },
  {
    id: 2,
    title: 'VMware vSphere Enterprise Plus',
    sub: 'LIC: VMW-64CP-PROD-2024',
    icon: 'cloud_sync',
    status: '30 Hari Lagi',
    statusColor: 'bg-secondary-fixed text-on-secondary-fixed',
    desc: 'Lisensi tahunan hypervisor cluster server utama akan berakhir pada 11 Juli 2025.',
    actions: ['Lihat Detail', 'Proses PO Renewal'],
  },
  {
    id: 3,
    title: 'Forklift Elektrik Toyota 8FBE',
    sub: 'ID: WH-FL-004 (Gudang Cikarang)',
    icon: 'local_shipping',
    status: 'Uji Kelayakan',
    statusColor: 'bg-error/10 text-error',
    desc: 'Sertifikasi K3 & Surat Izin Operasional Kemenaker jatuh tempo 18 Juni 2025.',
    actions: ['Jadwalkan Inspeksi K3'],
  },
]

export default function PriorityAlerts() {
  return (
    <div className="lg:col-span-5 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between pb-space-md">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-lg bg-error-container flex items-center justify-center text-error">
              <span className="material-symbols-outlined text-[20px]">notification_important</span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Prioritas & Peringatan Dini</h3>
              <p className="font-body-sm text-body-sm text-outline">Lisensi & garansi kritis yang memerlukan mitigasi</p>
            </div>
          </div>
          <span className="px-space-sm py-space-2xs rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">4 Perlu Tindakan</span>
        </div>
        <div className="space-y-space-md mt-space-sm">
          {alerts.map((alert) => (
            <div key={alert.id} className="p-space-md rounded-xl bg-surface-container-low/60 flex flex-col gap-space-sm">
              <div className="flex items-start justify-between gap-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary shadow-sm">
                    <span className="material-symbols-outlined text-[22px]">{alert.icon}</span>
                  </div>
                  <div>
                    <span className="font-label-md text-label-md font-semibold text-on-surface block">{alert.title}</span>
                    <span className="font-code-sm text-code-sm text-outline">{alert.sub}</span>
                  </div>
                </div>
                <span className={`px-space-sm py-space-2xs rounded-full ${alert.statusColor} font-label-sm text-label-sm font-semibold whitespace-nowrap`}>
                  {alert.status}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{alert.desc}</p>
              <div className="flex items-center justify-end gap-space-xs pt-space-2xs">
                {alert.actions.map((action) => (
                  <button
                    key={action}
                    className={`px-space-md py-space-xs rounded font-label-md text-label-md transition-colors ${
                      action === 'Ajukan Perpanjangan' || action === 'Proses PO Renewal' || action === 'Jadwalkan Inspeksi K3'
                        ? 'bg-secondary hover:bg-secondary-container text-on-secondary font-semibold shadow-sm'
                        : 'bg-surface-container-lowest hover:bg-surface-container text-on-surface'
                    }`}
                    type="button"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-space-md">
        <a className="font-label-md text-label-md text-secondary font-semibold hover:underline flex items-center justify-center gap-space-xs" href="#">
          <span>Buka Seluruh Daftar 18 Peringatan Garansi & Kontrak</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>
    </div>
  )
}
