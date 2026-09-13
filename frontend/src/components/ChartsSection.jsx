import CategoryBreakdown from './CategoryBreakdown'

export default function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
      <div className="lg:col-span-8 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pb-space-lg">
            <div>
              <div className="flex items-center gap-space-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Proyeksi Tren Nilai Depresiasi (2021 - 2025)</h2>
              </div>
              <p className="font-body-sm text-body-sm text-outline mt-0.5">Komparasi nilai akuisisi vs nilai buku terdepresiasi per kategori aset utama</p>
            </div>
            <div className="flex items-center gap-space-md">
              <div className="flex items-center gap-space-xs">
                <span className="w-3 h-3 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-label-sm text-outline">Nilai Buku Riil</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="w-3 h-3 rounded-full bg-surface-container-high"></span>
                <span className="font-label-sm text-label-sm text-outline">Estimasi Saldo Menurun</span>
              </div>
            </div>
          </div>
          <div className="relative w-full h-72 pt-space-md">
            <svg className="w-full h-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 740 240">
              <line stroke="#eceef0" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="740" y1="20" y2="20" />
              <line stroke="#eceef0" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="740" y1="75" y2="75" />
              <line stroke="#eceef0" strokeDasharray="4 4" strokeWidth="1" x1="0" x2="740" y1="130" y2="130" />
              <line stroke="#eceef0" strokeWidth="1" x1="0" x2="740" y1="185" y2="185" />
              <defs>
                <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#3a49d8" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#3a49d8" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M 40 60 C 120 70, 200 95, 300 105 C 420 115, 520 135, 700 152 L 700 185 L 40 185 Z" fill="url(#areaGradient)" />
              <path d="M 40 60 C 120 70, 200 95, 300 105 C 420 115, 520 135, 700 152" stroke="#3a49d8" strokeLinecap="round" strokeWidth="3" />
              <circle className="transition-transform hover:scale-125" cx="40" cy="60" fill="#3a49d8" r="5" />
              <circle className="transition-transform hover:scale-125" cx="210" cy="85" fill="#3a49d8" r="5" />
              <circle className="transition-transform hover:scale-125" cx="380" cy="112" fill="#3a49d8" r="5" />
              <circle className="transition-transform hover:scale-125" cx="550" cy="138" fill="#3a49d8" r="5" />
              <circle cx="700" cy="152" fill="#0c1843" r="6" stroke="#ffffff" strokeWidth="2" />
            </svg>
            <div className="flex justify-between text-outline font-label-sm text-label-sm pt-space-xs px-space-md">
              <span>2021 (Rp 58,4 M)</span>
              <span>2022 (Rp 53,1 M)</span>
              <span>2023 (Rp 49,6 M)</span>
              <span>2024 (Rp 45,9 M)</span>
              <span className="font-bold text-on-surface">2025 (Rp 42,85 M)</span>
            </div>
          </div>
          <CategoryBreakdown />
        </div>
      </div>
      <div className="lg:col-span-4 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-space-md">
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Komposisi Siklus Hidup</h3>
              <p className="font-body-sm text-body-sm text-outline mt-0.5">Status 4.829 total aset perusahaan</p>
            </div>
            <button className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-outline hover:text-on-surface" type="button">
              <span className="material-symbols-outlined text-[20px]">more_vert</span>
            </button>
          </div>
          <div className="flex items-center justify-center my-space-md">
            <div className="relative w-44 h-44">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" fill="none" r="38" stroke="#eceef0" strokeWidth="12" />
                <circle cx="50" cy="50" fill="none" r="38" stroke="#3a49d8" strokeDasharray="238.76" strokeDashoffset="28" strokeLinecap="round" strokeWidth="12" />
                <circle cx="50" cy="50" fill="none" r="38" stroke="#5565f2" strokeDasharray="238.76" strokeDashoffset="210" strokeLinecap="round" strokeWidth="12" />
                <circle cx="50" cy="50" fill="none" r="38" stroke="#ba1a1a" strokeDasharray="238.76" strokeDashoffset="230" strokeLinecap="round" strokeWidth="12" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
                <span className="font-headline-lg text-headline-lg font-bold text-on-surface leading-none">88.0%</span>
                <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider mt-1">Aktif</span>
              </div>
            </div>
          </div>
          <div className="space-y-space-sm pt-space-xs">
            {[
              { color: 'bg-secondary', label: 'Aktif Operasional', count: '4.250 Unit', percent: '88.0%' },
              { color: 'bg-secondary-container', label: 'Dalam Maintenance / Servis', count: '285 Unit', percent: '5.9%' },
              { color: 'bg-outline', label: 'Siap Disposal / Lelang', count: '184 Unit', percent: '3.8%' },
              { color: 'bg-primary-container', label: 'Procurement / PO Baru', count: '110 Unit', percent: '2.3%' },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low/40">
                <div className="flex items-center gap-space-sm">
                  <span className={`w-3 h-3 rounded-full ${item.color}`}></span>
                  <span className="font-body-sm text-body-sm text-on-surface font-medium">{item.label}</span>
                </div>
                <div className="text-right">
                  <span className="font-label-md text-label-md font-semibold text-on-surface">{item.count}</span>
                  <span className="text-outline font-label-sm text-label-sm block">{item.percent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="w-full mt-space-md py-space-sm bg-surface-container-low hover:bg-surface-container rounded-lg font-label-md text-label-md text-secondary font-semibold transition-colors flex items-center justify-center gap-space-xs" type="button">
          <span>Kelola Siklus Hidup Aset</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
