import { useEffect, useRef } from 'react'

const telemetryItems = [
  { label: 'Aktif Digunakan', value: '4.120', icon: 'check_circle', iconFill: true, iconColor: 'text-secondary', bg: 'bg-surface-container-low' },
  { label: 'Jadwal Servis', value: '142', icon: 'build', iconFill: true, iconColor: 'text-on-surface-variant', bg: 'bg-surface-container-low' },
  { label: 'Dipinjam (Check-out)', value: '388', icon: 'assignment_turned_in', iconFill: false, iconColor: 'text-secondary', bg: 'bg-surface-container-low' },
  { label: 'Rusak / Karantina', value: '47', icon: 'warning', iconFill: false, iconColor: 'text-error', bg: 'bg-error-container/50' },
  { label: 'Disposal Siap Lelang', value: '132', icon: 'delete_sweep', iconFill: false, iconColor: 'text-outline', bg: 'bg-surface-container-low' },
  { label: 'Kepatuhan RFID/QR', value: '99.4%', icon: 'verified', iconFill: false, iconColor: 'text-primary-fixed', bg: 'bg-tertiary-container', isPrimary: true },
]

const categories = [
  { value: 'it', label: 'IT Hardware & Server' },
  { value: 'industri', label: 'Mesin & Robotik Industri' },
  { value: 'kendaraan', label: 'Armada Kendaraan Logistik' },
  { value: 'medis', label: 'Peralatan Medis & Lab' },
  { value: 'kantor', label: 'Inventaris Fasilitas Kantor' },
]

const locations = [
  { value: 'kp-jkt', label: 'Kantor Pusat Jkt - Gedung A' },
  { value: 'dc-cbt', label: 'Data Center Tier-3 Cibitung' },
  { value: 'pb-krw', label: 'Pabrik Perakitan Karawang' },
  { value: 'hub-sby', label: 'Hub Logistik Rungkut Sby' },
  { value: 'wh-cikarang', label: 'Warehouse Sentral Cikarang' },
]

const statuses = [
  { value: 'aktif', label: 'Aktif' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'dipinjam', label: 'Dipinjam' },
  { value: 'rusak', label: 'Kritis / Rusak' },
  { value: 'disposal', label: 'Disposal' },
]

const assets = [
  {
    id: 'AST-IT-2024-0089',
    sn: 'DL-R750-99882',
    name: 'Server Dell PowerEdge R750',
    spec: 'Dual Xeon 6330, 256GB ECC, 8TB NVMe Enterprise',
    category: 'IT Hardware',
    categoryIcon: 'dns',
    categoryIconColor: 'text-secondary',
    location: 'Data Center Cibitung',
    subLocation: 'Rack Tier-3 / Slot A-04',
    pic: 'DevOps Core Team',
    picInitial: 'Hendra K.',
    picInitialBg: '',
    value: 'Rp 185.000.000',
    date: '14 Apr 2023',
    status: 'Aktif',
    statusColor: 'bg-surface-container-high text-secondary',
    statusDot: 'bg-secondary animate-pulse',
    selected: true,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOc7LvI91IrWA1UKIpVzSvXt3uAg2hTI4Jtv5jgDt4P109MlntUTbCVQPrVALL4fg4IXmJ_dNjo_pyqAEWH6zv7vAT7wXGFAoj9mDMUNmVtl5NTLsTibtlMeUzhq3EFv8dmvV9Lfp-C1W1wAJhs6d7O_W1AXmOYHjx8PX-bJ0xTTdzvyH9DkUh0hRiv0argY9e8yC8my3CCi925JEyQAkaoM_KqZgv2pEJjAV4YmIjTsVlSCu45G9w',
    tier: 'Tier 1 Critical Asset',
    acquisition: 'Rp 185 Jt',
    depreciation: 'Rp 37 Jt',
    remainingValue: 'Rp 148 Jt',
    depreciationPercent: '80.0%',
    remainingMonths: '48 Bulan',
    serial: 'DL-R750-99882',
    mac: '00:1A:2B:3C:4D:5E',
    vendor: 'PT Mitra Integrasi Informatika',
    warranty: 'Aktif s/d 31 Des 2026',
    warrantyIcon: 'verified_user',
    picDetail: 'Hendra Kusuma (DevOps)',
  },
  {
    id: 'AST-IT-2024-0312',
    sn: 'C02X87J0MD6T',
    name: 'MacBook Pro 16" M3 Max',
    spec: 'Apple Silicon 16-Core, 64GB Unified Memory, 1TB SSD',
    category: 'IT Hardware',
    categoryIcon: 'laptop_mac',
    categoryIconColor: 'text-outline',
    location: 'Kantor Pusat Jkt',
    subLocation: 'Lt. 4 - Divisi Engineering',
    pic: 'Bagas Prakoso',
    picInitial: 'BP',
    picInitialBg: 'bg-secondary-container text-on-secondary',
    value: 'Rp 58.900.000',
    date: '10 Jan 2024',
    status: 'Aktif',
    statusColor: 'bg-surface-container-high text-secondary',
    statusDot: 'bg-secondary',
    selected: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeTDWnGfBXyagiynbUS84--6Gye65cbGzVtchmeg0-TDLX267F1U3824Ma_rFJqTOoDwgns8K0hQsB3nORR5Tqgn2WxIB1S8uEV0mah-cpCKIpj9-yTWNtn-_v1oCtXR_js4_e2bcoBxaDLhGfo070sY_-hcE-o4zd1dIffsex9tB-PGuaHmBYaNDn6fvH4WjO7-g0EFAVDYEWvbpDLKPLDGBaA5gEYkYOr7AQpkPLD-UNMNLImLlb',
    tier: '',
    acquisition: '',
    depreciation: '',
    remainingValue: '',
    depreciationPercent: '',
    remainingMonths: '',
    serial: '',
    mac: '',
    vendor: '',
    warranty: '',
    warrantyIcon: '',
    picDetail: '',
  },
  {
    id: 'AST-IND-2023-0041',
    sn: 'TY-FL25-44109',
    name: 'Forklift Elektrik Toyota 2.5T',
    spec: 'Model 8FBN25, AC Drive System 48V Lithium Battery',
    category: 'Mesin Industri',
    categoryIcon: 'precision_manufacturing',
    categoryIconColor: 'text-outline',
    location: 'Hub Logistik Rungkut',
    subLocation: 'Area Bongkar Muat B-02',
    pic: 'Dedi Rusli',
    picInitial: 'DR',
    picInitialBg: 'bg-surface-container-highest text-on-surface',
    value: 'Rp 340.000.000',
    date: '05 Agu 2023',
    status: 'Maintenance',
    statusColor: 'bg-surface-container-high text-on-surface-variant',
    statusDot: 'bg-outline',
    selected: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeqYD6v3JIhxRb1ef5Uxh6rvXtKBzLsdDowv-LCLvGQlLiAXoYc8UMOY15VI3Ta28RpTqpMazah0qS8TVgsYfAwmpfLxt-kX1tpeSwg7dZkmyh7spKSJFR-XtEkwBq2rBtmloLc0NhS2oftA1CyVjAGISXPvWCC0YxVBR3z2q079RBLMA8CA5vevUE-tznJ5XX1_lxmAoqmzgqxBY-6Y2-OzMuftZOD__rSshQoNlx-rOLUmhlm9sM',
    tier: '',
    acquisition: '',
    depreciation: '',
    remainingValue: '',
    depreciationPercent: '',
    remainingMonths: '',
    serial: '',
    mac: '',
    vendor: '',
    warranty: '',
    warrantyIcon: '',
    picDetail: '',
  },
  {
    id: 'AST-VH-2022-0115',
    sn: 'B 9421 KXT',
    name: 'Isuzu Giga Wing Box FVR 34',
    spec: '6 Cylinder Common Rail 285 PS, Panjang Box 9.6 Meter',
    category: 'Kendaraan',
    categoryIcon: 'local_shipping',
    categoryIconColor: 'text-outline',
    location: 'Warehouse Sentral',
    subLocation: 'Cikarang - Pool Barat',
    pic: 'Agus Suherman',
    picInitial: 'AS',
    picInitialBg: 'bg-surface-container-highest text-on-surface',
    value: 'Rp 820.000.000',
    date: '18 Mar 2022',
    status: 'Dipinjam',
    statusColor: 'bg-surface-container-high text-secondary',
    statusDot: 'bg-secondary',
    selected: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFTf5m89AW17lXQNr_acV3hPV4jfkA27POYIWWk3V9t5R7Js1Kq226JnB4K2ET3B-GvRsVWBdHJnACc_qY7OUAhTp7Q3I6P8n0drUPMFaVk9-Tnnc8k7XGv3qKw9lXn7XfYlAJ_3qtgJ6pHSolr2qG0XxUiW3n67XkGSXQNTzZBPcumx5WCU5bWlVj-ob5SKPzK3Y9zIK0vzgSJx5gHcb-rDbatDwsZfavP4elShJ7FJaxOk2TGVRw',
    tier: '',
    acquisition: '',
    depreciation: '',
    remainingValue: '',
    depreciationPercent: '',
    remainingMonths: '',
    serial: '',
    mac: '',
    vendor: '',
    warranty: '',
    warrantyIcon: '',
    picDetail: '',
  },
  {
    id: 'AST-LAB-2023-0504',
    sn: 'SH-UV2600-771',
    name: 'Shimadzu UV-2600i Spectrophotometer',
    spec: 'Double-beam Optical System, Lo-Ray-Ligh Diffraction Grating',
    category: 'Medis & Lab',
    categoryIcon: 'biotech',
    categoryIconColor: 'text-outline',
    location: 'Pabrik Karawang',
    subLocation: 'Lab QC Kimia Lt. 2',
    pic: 'Nurul Novita, Ph.D',
    picInitial: 'NN',
    picInitialBg: 'bg-surface-container-highest text-on-surface',
    value: 'Rp 210.500.000',
    date: '12 Nov 2023',
    status: 'Aktif',
    statusColor: 'bg-surface-container-high text-secondary',
    statusDot: 'bg-secondary',
    selected: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDM0OPqnDD2Gg8o9_sSQ0jAv6PNkhFKGfHPtBXNWZDBhX0MOsM725IeTjgLdSleads7_U_pQGFUJwjV2CIsUrFnw3zXGeB8iCmdZ5z5AfNfvV8bFBgRdL74A_PNy32ZTjf-0FGQMwbc9_JY0vDCCD2EvGnU-HMVi7Pkvz-zboFrYymb2taqtoxTgFrjS9M2GxpTlLt7MxtJoH5H2bUXaXpigmSVIarg8KuHXY-16fqYrXR21qb4VNS8',
    tier: '',
    acquisition: '',
    depreciation: '',
    remainingValue: '',
    depreciationPercent: '',
    remainingMonths: '',
    serial: '',
    mac: '',
    vendor: '',
    warranty: '',
    warrantyIcon: '',
    picDetail: '',
  },
  {
    id: 'AST-FAC-2021-0003',
    sn: 'CUM-500KVA-11',
    name: 'Genset Cummins Silent 500 kVA',
    spec: 'Engine QSX15-G8, Stamford Alternator, Auto Transfer Switch',
    category: 'Fasilitas & Mesin',
    categoryIcon: 'bolt',
    categoryIconColor: 'text-outline',
    location: 'Data Center Cibitung',
    subLocation: 'Power House Gardu Timur',
    pic: 'Teguh Maulana',
    picInitial: 'TM',
    picInitialBg: 'bg-surface-container-highest text-on-surface',
    value: 'Rp 645.000.000',
    date: '03 Feb 2021',
    status: 'Kritis',
    statusColor: 'bg-error-container/60 text-error',
    statusDot: 'bg-error animate-ping',
    selected: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnkuSMoccIU1xftcWE6s-d-_7pC5LbFMyE_xBcoURcSNmCNtCVabMgSLixH-UzPlw668lDCZJNs8zSd-Tj5FNStgrVwN9mLFHeBhN2Tinr4LCfE-os7hUMfJYe3YYXlvxt2SJANfmkkI8RMr2IN3a08r994O93xKa03qdx7Yrnl8WoLbrCRKbxLc0OBx2ADwivqU5KmicVa9nOCxxT6OBiU6KMNBNjQL_5On7aRwfmMtSNHYnv9SNd',
    tier: '',
    acquisition: '',
    depreciation: '',
    remainingValue: '',
    depreciationPercent: '',
    remainingMonths: '',
    serial: '',
    mac: '',
    vendor: '',
    warranty: '',
    warrantyIcon: '',
    picDetail: '',
  },
  {
    id: 'AST-IT-2023-0941',
    sn: 'DELL-WRK-5820',
    name: 'Dell Precision 5820 Tower',
    spec: 'Intel Xeon W-2245, 128GB RAM, Nvidia RTX A5000 24GB',
    category: 'IT Hardware',
    categoryIcon: 'desktop_windows',
    categoryIconColor: 'text-outline',
    location: 'Kantor Pusat Jkt',
    subLocation: 'Lt. 3 - Desain & Konstruksi',
    pic: 'Farah Anindya',
    picInitial: 'FA',
    picInitialBg: 'bg-surface-container-highest text-on-surface',
    value: 'Rp 74.200.000',
    date: '19 Sep 2023',
    status: 'Aktif',
    statusColor: 'bg-surface-container-high text-secondary',
    statusDot: 'bg-secondary',
    selected: false,
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdYjmP05t86rezDQR9C7hBWY9pUYVDenzqVUf4s839rXTCl4Gfhl81C2W8bdAKmVtsJk_Dxh0wBEcokeVrXUYv54YvChUGLJdLWQR07hswgBz_vXaOMs187aRE6ym0RnqFGhCULgYAH9j-hgXQOgEgahut0DtUtmbn1Bvd-q25XfMPydwweQerGb9aQffc48q5WOMBnbHmy0b7qFzh9EN3CmyQ9k7VPe2MKjVIO8qvzuxK5GNaS4i2',
    tier: '',
    acquisition: '',
    depreciation: '',
    remainingValue: '',
    depreciationPercent: '',
    remainingMonths: '',
    serial: '',
    mac: '',
    vendor: '',
    warranty: '',
    warrantyIcon: '',
    picDetail: '',
  },
]

export default function KatalogAsetPage() {
  const selectedAsset = assets[0]

  useEffect(() => {
    const searchInput = document.getElementById('tableSearchInput')
    if (searchInput) {
      const handleInput = (e) => {
        const val = e.target.value.toLowerCase()
        const rows = document.querySelectorAll('tbody tr')
        rows.forEach((row) => {
          const text = row.innerText.toLowerCase()
          row.style.display = text.includes(val) ? '' : 'none'
        })
      }
      searchInput.addEventListener('input', handleInput)
      return () => searchInput.removeEventListener('input', handleInput)
    }
  }, [])

  return (
    <div className="flex flex-col w-full">
      {/* Top Context Header & KPI Strip */}
      <div className="p-space-xl pb-space-lg flex flex-col gap-space-lg">
        {/* Breadcrumb & Title Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-md">
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center gap-space-xs text-on-surface-variant">
              <span className="font-label-sm text-label-sm">AssetCore EAM</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="font-label-sm text-label-sm text-secondary font-semibold">Katalog & Master Data</span>
            </div>
            <div className="flex items-center gap-space-md flex-wrap">
              <h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight">Katalog & Master Data Aset</h1>
              <span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                4.829 Total Aset Terdata
              </span>
              <span className="inline-flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">
                Total Valuasi: <strong className="text-on-surface font-semibold ml-0.5">Rp 48,2 Miliar</strong>
              </span>
            </div>
          </div>
          {/* Action Group */}
          <div className="flex items-center gap-space-sm flex-wrap">
            <button className="flex items-center gap-space-xs h-9 px-space-md bg-surface-container-lowest hover:bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md font-semibold transition-all shadow-sm" type="button">
              <span className="material-symbols-outlined text-[18px] text-outline">upload_file</span>
              <span>Import CSV/XLS</span>
            </button>
            <button className="flex items-center gap-space-xs h-9 px-space-md bg-surface-container-lowest hover:bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md font-semibold transition-all shadow-sm" type="button">
              <span className="material-symbols-outlined text-[18px] text-outline">print</span>
              <span>Cetak Batch QR</span>
            </button>
            <button className="flex items-center gap-space-xs h-9 px-space-md bg-surface-container-lowest hover:bg-surface-container-low text-on-surface rounded-lg font-label-md text-label-md font-semibold transition-all shadow-sm" type="button">
              <span className="material-symbols-outlined text-[18px] text-outline">file_download</span>
              <span>Export Lap.</span>
            </button>
            <button className="flex items-center gap-space-xs h-9 px-space-lg bg-secondary hover:bg-secondary-container text-on-secondary rounded-lg font-label-md text-label-md font-semibold transition-all shadow-sm shadow-secondary/20" type="button">
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              <span>Daftarkan Aset Baru</span>
            </button>
          </div>
        </div>
        {/* Live Telemetry / Asset Health Mini Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-md">
          {telemetryItems.map((item) => (
            <div key={item.label} className={`${item.isPrimary ? 'bg-primary-container text-on-primary' : 'bg-surface-container-lowest'} p-space-md rounded-xl shadow-sm flex items-center justify-between`}>
              <div className="flex flex-col">
                <span className={`font-label-sm text-label-sm ${item.isPrimary ? 'text-on-primary-container' : 'text-outline'} uppercase font-semibold`}>{item.label}</span>
                <span className={`font-headline-md text-headline-md ${item.isPrimary ? 'text-on-primary' : 'text-on-surface'} font-bold tracking-tight`}>{item.value}</span>
              </div>
              <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center ${item.iconColor}`}>
                <span className="material-symbols-outlined text-[20px]" style={item.iconFill ? { fontVariationSettings: "'FILL' 1" } : undefined}>{item.icon}</span>
              </div>
            </div>
          ))}
        </div>
        {/* Advanced Filter & Search Ribbon */}
        <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-space-sm">
            {/* Main Search Bar */}
            <div className="relative flex-1">
              <span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-[20px] text-outline">search</span>
              <input className="w-full h-10 pl-10 pr-10 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all" id="tableSearchInput" placeholder="Cari berdasarkan No Seri, Tag Aset, Nama, Spesifikasi, atau PIC..." type="text"/>
              <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-[18px] text-outline cursor-pointer hover:text-on-surface">filter_list</span>
            </div>
            {/* Quick Select Filters */}
            <div className="flex items-center gap-space-xs flex-wrap sm:flex-nowrap">
              {/* Kategori */}
              <div className="relative min-w-[150px] flex-1 sm:flex-initial">
                <select className="w-full h-10 px-space-md pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/30 cursor-pointer">
                  <option value="">Semua Kategori</option>
                  {categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none">expand_more</span>
              </div>
              {/* Lokasi / Cabang */}
              <div className="relative min-w-[170px] flex-1 sm:flex-initial">
                <select className="w-full h-10 px-space-md pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/30 cursor-pointer">
                  <option value="">Semua Lokasi / Hub</option>
                  {locations.map(l => <option key={l.value} value={l.value}>{l.label}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none">expand_more</span>
              </div>
              {/* Status Operasional */}
              <div className="relative min-w-[130px] flex-1 sm:flex-initial">
                <select className="w-full h-10 px-space-md pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/30 cursor-pointer">
                  <option value="">Status: Semua</option>
                  {statuses.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none">expand_more</span>
              </div>
              {/* Nilai Valuasi Filter Button */}
              <button className="h-10 px-space-md bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-md text-label-md font-semibold flex items-center gap-space-xs transition-colors shrink-0" type="button">
                <span className="material-symbols-outlined text-[18px] text-outline">tune</span>
                <span>Rentang Nilai</span>
              </button>
              {/* Reset Filter */}
              <button className="h-10 w-10 bg-surface-container-low hover:bg-surface-container text-outline hover:text-on-surface rounded-lg flex items-center justify-center transition-colors shrink-0" title="Reset Semua Filter" type="button">
                <span className="material-symbols-outlined text-[18px]">restart_alt</span>
              </button>
            </div>
          </div>
          {/* Active Filter Tags Ribbon */}
          <div className="flex items-center gap-space-xs flex-wrap font-label-sm text-label-sm">
            <span className="text-outline font-semibold uppercase tracking-wider">Filter Aktif:</span>
            <span className="inline-flex items-center gap-space-2xs px-space-sm py-1 bg-surface-container rounded-md text-on-surface">
              Lokasi: <strong>Data Center Cibitung</strong>
              <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-error">close</span>
            </span>
            <span className="inline-flex items-center gap-space-2xs px-space-sm py-1 bg-surface-container rounded-md text-on-surface">
              Status: <strong>Aktif, Maintenance</strong>
              <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-error">close</span>
            </span>
            <span className="inline-flex items-center gap-space-2xs px-space-sm py-1 bg-surface-container rounded-md text-on-surface">
              Kategori: <strong>IT Hardware</strong>
              <span className="material-symbols-outlined text-[14px] cursor-pointer hover:text-error">close</span>
            </span>
            <button className="text-secondary hover:underline font-semibold ml-space-xs" type="button">Hapus Semua Filter</button>
          </div>
        </div>
      </div>
      {/* Main Content Stage: Master Table + Detail Slide Panel */}
      <div className="px-space-xl pb-space-2xl flex flex-col xl:flex-row gap-space-xl items-start">
        {/* Left Column: Master Table Data Container */}
        <div className="flex-1 w-full min-w-0 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
          {/* Table Actions Ribbon */}
          <div className="px-space-lg py-space-md bg-surface-container-low flex items-center justify-between gap-space-md flex-wrap">
            <div className="flex items-center gap-space-md">
              <label className="inline-flex items-center gap-space-xs cursor-pointer">
                <input className="rounded text-secondary focus:ring-secondary w-4 h-4 cursor-pointer accent-secondary" type="checkbox"/>
                <span className="font-label-md text-label-md text-on-surface font-medium">Pilih Semua (8 Terpilih)</span>
              </label>
              <div className="h-4 w-px bg-surface-container-high hidden sm:block"></div>
              <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline">Total Nilai Terpilih: <strong className="text-secondary font-semibold font-code-sm text-code-sm">Rp 845.000.000</strong></span>
            </div>
            <div className="flex items-center gap-space-xs">
              <button className="px-space-sm py-1 rounded-md bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center gap-1 shadow-sm" type="button">
                <span className="material-symbols-outlined text-[16px] text-secondary">qr_code_2</span>
                <span>Cetak Tag Terpilih</span>
              </button>
              <button className="px-space-sm py-1 rounded-md bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center gap-1 shadow-sm" type="button">
                <span className="material-symbols-outlined text-[16px] text-outline">move_up</span>
                <span>Mutasi Lokasi</span>
              </button>
              <button className="p-1 rounded-md bg-surface-container-lowest text-outline hover:text-on-surface shadow-sm" type="button">
                <span className="material-symbols-outlined text-[18px]">view_column</span>
              </button>
            </div>
          </div>
          {/* Data Table Wrap */}
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left font-body-sm text-body-sm">
              <thead>
                <tr className="bg-surface-container-low text-outline uppercase font-label-sm text-label-sm tracking-wider select-none">
                  <th className="py-space-md pl-space-lg pr-space-xs w-10 text-center" scope="col">
                    <input className="rounded text-secondary focus:ring-secondary w-4 h-4 accent-secondary cursor-pointer" type="checkbox"/>
                  </th>
                  <th className="py-space-md px-space-md font-semibold" scope="col">Tag & QR</th>
                  <th className="py-space-md px-space-md font-semibold min-w-[220px]" scope="col">Nama Aset & Spek</th>
                  <th className="py-space-md px-space-md font-semibold" scope="col">Kategori</th>
                  <th className="py-space-md px-space-md font-semibold" scope="col">Lokasi Penempatan</th>
                  <th className="py-space-md px-space-md font-semibold" scope="col">PIC / Pengguna</th>
                  <th className="py-space-md px-space-md font-semibold text-right" scope="col">Nilai Perolehan</th>
                  <th className="py-space-md px-space-md font-semibold" scope="col">Status</th>
                  <th className="py-space-md pr-space-lg pl-space-xs text-center font-semibold" scope="col">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y-0 text-on-surface">
                {assets.map((asset) => (
                  <tr key={asset.id} className={`${asset.selected ? 'bg-surface-container-low/60 hover:bg-surface-container' : 'hover:bg-surface-container-low'} transition-colors cursor-pointer group`}>
                    <td className="py-space-md pl-space-lg pr-space-xs text-center">
                      <input checked={asset.selected} className="rounded text-secondary focus:ring-secondary w-4 h-4 accent-secondary cursor-pointer" type="checkbox"/>
                    </td>
                    <td className="py-space-md px-space-md whitespace-nowrap">
                      <div className="flex items-center gap-space-sm">
                        <div className={`w-8 h-8 rounded ${asset.selected ? 'bg-surface-container-lowest' : 'bg-surface-container-low'} flex items-center justify-center ${asset.selected ? 'text-primary-container shadow-sm' : 'text-on-surface-variant'}`}>
                          <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
                        </div>
                        <div className="flex flex-col">
                          <span className={`font-code-sm text-code-sm font-semibold ${asset.selected ? 'text-secondary' : 'text-on-surface'}`}>{asset.id}</span>
                          <span className="font-label-sm text-label-sm text-outline">SN: {asset.sn}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                          <img className="w-full h-full object-cover" data-alt={asset.name} src={asset.img}/>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-title-md text-title-md text-on-surface font-semibold truncate group-hover:text-secondary transition-colors">{asset.name}</span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant truncate">{asset.spec}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                        <span className={`material-symbols-outlined text-[14px] ${asset.categoryIconColor}`}>{asset.categoryIcon}</span>
                        {asset.category}
                      </span>
                    </td>
                    <td className="py-space-md px-space-md">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface truncate">{asset.location}</span>
                        <span className="font-label-sm text-label-sm text-outline truncate">{asset.subLocation}</span>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md whitespace-nowrap">
                      <div className="flex items-center gap-space-xs">
                        {asset.picInitialBg ? (
                          <span className={`w-6 h-6 rounded-full ${asset.picInitialBg} font-label-sm text-label-sm flex items-center justify-center font-bold`}>{asset.picInitial}</span>
                        ) : (
                          <img alt="User" className="w-6 h-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLinH7m99dEmEwIzt_vrLAJ6ksuYnEbbimViGPXX0acE_EpYSPMJgpEE9m8LTDcNNnkcMMTuY7Cof56ULjQNVzmCZzSkjdl9sg4dQkI9rE3yf2oH_cl6TKyGjiXsHw7sOkfSVKn7MwJFMFwk_pPOF04iEXSpRgRqyxS36enu2rW9Jp_80Mt4V9LfrZfrGiLtTsj2bm8h0Jdl1zm1Puy4frWMugOyp9v_AA1y4mrNpA7EVe6NhwGLit"/>
                        )}
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm font-semibold text-on-surface leading-tight">{asset.pic}</span>
                          <span className="font-label-sm text-label-sm text-outline leading-none">PIC: {asset.picInitial}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md text-right whitespace-nowrap">
                      <span className="font-code-sm text-code-sm font-semibold text-on-surface">{asset.value}</span>
                      <span className="block font-label-sm text-label-sm text-outline">{asset.date}</span>
                    </td>
                    <td className="py-space-md px-space-md whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full ${asset.statusColor} font-label-sm text-label-sm font-bold uppercase tracking-wider`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${asset.statusDot}`}></span>
                        {asset.status}
                      </span>
                    </td>
                    <td className="py-space-md pr-space-lg pl-space-xs text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-1">
                        <button className="p-1 rounded hover:bg-surface-container-highest text-secondary" title="Buka Detail" type="button">
                          <span className="material-symbols-outlined text-[18px]">visibility</span>
                        </button>
                        <button className="p-1 rounded hover:bg-surface-container-highest text-outline hover:text-on-surface" title="Cetak QR" type="button">
                          <span className="material-symbols-outlined text-[18px]">qr_code</span>
                        </button>
                        <button className="p-1 rounded hover:bg-surface-container-highest text-outline hover:text-on-surface" type="button">
                          <span className="material-symbols-outlined text-[18px]">more_vert</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Table Footer & Pagination */}
          <div className="px-space-lg py-space-md bg-surface-container-low flex items-center justify-between gap-space-md flex-wrap">
            <div className="flex items-center gap-space-sm font-label-sm text-label-sm text-outline">
              <span>Menampilkan <strong className="text-on-surface font-semibold">1 - 7</strong> dari <strong className="text-on-surface font-semibold">4.829</strong> entitas aset</span>
              <div className="h-3 w-px bg-surface-container-high"></div>
              <div className="flex items-center gap-1">
                <span>Baris per halaman:</span>
                <select className="bg-surface-container-lowest text-on-surface rounded px-1 py-0.5 font-semibold focus:outline-none cursor-pointer">
                  <option>10</option>
                  <option selected="">25</option>
                  <option>50</option>
                  <option>100</option>
                </select>
              </div>
            </div>
            {/* Pagination Controls */}
            <div className="flex items-center gap-space-xs">
              <button className="w-8 h-8 rounded bg-surface-container-lowest text-outline hover:text-on-surface flex items-center justify-center shadow-sm disabled:opacity-40" disabled type="button">
                <span className="material-symbols-outlined text-[18px]">keyboard_double_arrow_left</span>
              </button>
              <button className="w-8 h-8 rounded bg-surface-container-lowest text-outline hover:text-on-surface flex items-center justify-center shadow-sm disabled:opacity-40" disabled type="button">
                <span className="material-symbols-outlined text-[18px]">chevron_left</span>
              </button>
              <button className="w-8 h-8 rounded bg-secondary text-on-secondary font-label-sm text-label-sm font-bold flex items-center justify-center shadow-sm" type="button">1</button>
              <button className="w-8 h-8 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-medium flex items-center justify-center shadow-sm" type="button">2</button>
              <button className="w-8 h-8 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-medium flex items-center justify-center shadow-sm" type="button">3</button>
              <span className="px-1 text-outline font-label-sm text-label-sm">...</span>
              <button className="w-8 h-8 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-medium flex items-center justify-center shadow-sm" type="button">483</button>
              <button className="w-8 h-8 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface flex items-center justify-center shadow-sm" type="button">
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </button>
              <button className="w-8 h-8 rounded bg-surface-container-lowest hover:bg-surface-container text-on-surface flex items-center justify-center shadow-sm" type="button">
                <span className="material-symbols-outlined text-[18px]">keyboard_double_arrow_right</span>
              </button>
            </div>
          </div>
        </div>
        {/* Right Column: Docked / Collapsible Asset Detail Panel (Selected: AST-IT-2024-0089) */}
        <div className="w-full xl:w-[410px] shrink-0 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col overflow-hidden">
          {/* Detail Card Header */}
          <div className="p-space-lg bg-surface-container-low flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[22px]">verified</span>
              <span className="font-headline-sm text-headline-sm text-on-surface font-bold">Detail Aset Terpilih</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1 rounded bg-surface-container-lowest text-outline hover:text-on-surface shadow-sm" title="Buka Halaman Lengkap" type="button">
                <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </button>
              <button className="p-1 rounded bg-surface-container-lowest text-outline hover:text-on-surface shadow-sm" title="Tutup Panel" type="button">
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>
          </div>
          {/* Card Main Body */}
          <div className="p-space-lg flex flex-col gap-space-lg">
            {/* Asset Identification Header Card */}
            <div className="flex gap-space-md items-start">
              <div className="p-2 bg-surface-container-low rounded-lg shrink-0 flex flex-col items-center justify-center gap-1">
                {/* Inline High-contrast SVG QR Code */}
                <svg className="w-20 h-20 text-on-surface" fill="currentColor" viewBox="0 0 100 100">
                  <rect fill="currentColor" height="30" rx="3" width="30" x="0" y="0"/>
                  <rect fill="#ffffff" height="20" rx="2" width="20" x="5" y="5"/>
                  <rect fill="currentColor" height="12" width="12" x="9" y="9"/>
                  <rect fill="currentColor" height="30" rx="3" width="30" x="70" y="0"/>
                  <rect fill="#ffffff" height="20" rx="2" width="20" x="75" y="5"/>
                  <rect fill="currentColor" height="12" width="12" x="79" y="9"/>
                  <rect fill="currentColor" height="30" rx="3" width="30" x="0" y="70"/>
                  <rect fill="#ffffff" height="20" rx="2" width="20" x="5" y="75"/>
                  <rect fill="currentColor" height="12" width="12" x="9" y="79"/>
                  <rect fill="currentColor" height="8" width="8" x="36" y="8"/>
                  <rect fill="currentColor" height="8" width="14" x="48" y="14"/>
                  <rect fill="currentColor" height="14" width="8" x="36" y="24"/>
                  <rect fill="currentColor" height="8" width="18" x="48" y="32"/>
                  <rect fill="currentColor" height="16" width="8" x="8" y="36"/>
                  <rect fill="currentColor" height="8" width="16" x="22" y="44"/>
                  <rect fill="currentColor" height="18" width="10" x="42" y="48"/>
                  <rect fill="currentColor" height="8" width="8" x="58" y="48"/>
                  <rect fill="currentColor" height="8" width="20" x="72" y="40"/>
                  <rect fill="currentColor" height="12" width="14" x="78" y="54"/>
                  <rect fill="currentColor" height="8" width="14" x="36" y="72"/>
                  <rect fill="currentColor" height="22" width="8" x="54" y="68"/>
                  <rect fill="currentColor" height="8" width="24" x="68" y="76"/>
                  <rect fill="currentColor" height="8" width="16" x="76" y="88"/>
                  <rect fill="currentColor" height="8" width="8" x="40" y="86"/>
                </svg>
                <span className="font-code-sm text-[10px] text-outline tracking-wider font-semibold">RFID/NFC OK</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                {selectedAsset.tier && (
                  <span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-[10px] font-bold uppercase tracking-wider mb-1">
                    {selectedAsset.tier}
                  </span>
                )}
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">{selectedAsset.name}</h3>
                <span className="font-code-sm text-code-sm text-secondary font-semibold">{selectedAsset.id}</span>
                <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm mt-1">
                  <span className="material-symbols-outlined text-[16px] text-outline">{selectedAsset.categoryIcon}</span>
                  <span>{selectedAsset.location} / {selectedAsset.subLocation}</span>
                </div>
              </div>
            </div>
            {/* Financial Value & Depreciation Matrix */}
            <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-outline uppercase font-semibold">Valuasi Buku Berjalan</span>
                <span className="font-label-sm text-label-sm text-secondary font-semibold">Metode Garis Lurus (5 Thn)</span>
              </div>
              <div className="grid grid-cols-3 gap-space-xs py-space-xs">
                <div className="flex flex-col">
                  <span className="font-label-sm text-[11px] text-outline">Harga Perolehan</span>
                  <span className="font-code-sm text-code-sm font-bold text-on-surface">{selectedAsset.acquisition}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-[11px] text-outline">Akum. Depresiasi</span>
                  <span className="font-code-sm text-code-sm font-bold text-outline">{selectedAsset.depreciation}</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-[11px] text-outline">Nilai Buku Sisa</span>
                  <span className="font-code-sm text-code-sm font-bold text-secondary">{selectedAsset.remainingValue}</span>
                </div>
              </div>
              {/* Progress Visualizer for Depreciation */}
              <div className="flex flex-col gap-1">
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden flex">
                  <div className="h-full bg-secondary rounded-full" style={{ width: selectedAsset.depreciationPercent || '0%' }}></div>
                </div>
                <div className="flex justify-between text-[11px] font-label-sm text-outline">
                  <span>Sisa Umur Ekonomis: {selectedAsset.remainingMonths}</span>
                  <span>{selectedAsset.depreciationPercent} Terisa</span>
                </div>
              </div>
            </div>
            {/* Specifications & Technical Identity */}
            <div className="flex flex-col gap-space-xs text-body-sm font-body-sm">
              <span className="font-label-sm text-label-sm text-outline uppercase font-bold tracking-wider">Identifikasi Teknis</span>
              <div className="bg-surface-container-low p-space-md rounded-xl space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-outline">Nomor Seri (Serial No)</span>
                  <span className="font-code-sm text-code-sm font-semibold text-on-surface">{selectedAsset.serial || '-'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-outline">Primary MAC Address</span>
                  <span className="font-code-sm text-code-sm font-semibold text-on-surface">{selectedAsset.mac || '-'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-outline">Vendor Penyedia</span>
                  <span className="font-medium text-on-surface">{selectedAsset.vendor || '-'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-outline">Status Garansi Pabrik</span>
                  <span className="font-semibold text-secondary flex items-center gap-1">
                    {selectedAsset.warrantyIcon && <span className="material-symbols-outlined text-[16px]">{selectedAsset.warrantyIcon}</span>}
                    {selectedAsset.warranty || '-'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-outline">PIC Penanggung Jawab</span>
                  <span className="font-medium text-on-surface">{selectedAsset.picDetail || '-'}</span>
                </div>
              </div>
            </div>
            {/* Asset Lifecycle Timeline */}
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm text-outline uppercase font-bold tracking-wider">Jejak Siklus Hidup (Lifecycle)</span>
              <div className="relative pl-6 space-y-4 pt-2">
                {/* Timeline Vertical Line */}
                <div className="absolute left-2.5 top-3 bottom-2 w-0.5 bg-surface-container-high"></div>
                {/* Milestone 1 */}
                <div className="relative flex flex-col">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-secondary"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">Pemeriksaan Berkala & Patch Firmware</span>
                    <span className="font-code-sm text-[11px] text-outline">15 Jan 2025</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Update BIOS 2.14.0 & pengujian dual power supply normal.</span>
                </div>
                {/* Milestone 2 */}
                <div className="relative flex flex-col">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-surface-container-highest"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">Deployment ke Data Center Cibitung</span>
                    <span className="font-code-sm text-[11px] text-outline">22 Mei 2023</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Instalasi di Rack A-04 cluster Kubernetes Core-01.</span>
                </div>
                {/* Milestone 3 */}
                <div className="relative flex flex-col">
                  <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-surface-container-highest"></div>
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm font-bold text-on-surface">Pengadaan PO-2023-0488</span>
                    <span className="font-code-sm text-[11px] text-outline">14 Apr 2023</span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">Penerimaan fisik oleh Logistik & tagging RFID selesai.</span>
                </div>
              </div>
            </div>
            {/* Quick Action Button Dock */}
            <div className="flex flex-col gap-space-xs pt-space-xs">
              <div className="grid grid-cols-2 gap-space-xs">
                <button className="flex items-center justify-center gap-1.5 h-9 px-space-sm bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-sm text-label-sm font-semibold transition-colors" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary">build</span>
                  <span>Jadwalkan Servis</span>
                </button>
                <button className="flex items-center justify-center gap-1.5 h-9 px-space-sm bg-surface-container-low hover:bg-surface-container text-on-surface rounded-lg font-label-sm text-label-sm font-semibold transition-colors" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary">move_up</span>
                  <span>Mutasi / Transfer</span>
                </button>
              </div>
              <button className="flex items-center justify-center gap-space-xs h-10 w-full bg-primary hover:bg-primary/90 text-on-primary rounded-lg font-label-md text-label-md font-semibold transition-colors shadow-sm" type="button">
                <span className="material-symbols-outlined text-[18px]">print</span>
                <span>Cetak Tag Thermal & RFID Barcode</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
