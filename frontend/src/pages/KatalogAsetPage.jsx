import { useEffect, useMemo, useRef, useState } from 'react'
import { useAssets } from '../hooks/useAssets'
import { useCreateAsset, useSupabaseQuery } from '../hooks/useCreateAsset'

const telemetryItems = [
  { label: 'Aktif Digunakan', value: '4.120', icon: 'check_circle', iconFill: true, iconColor: 'text-secondary', bg: 'bg-surface-container-low' },
  { label: 'Jadwal Servis', value: '142', icon: 'build', iconFill: true, iconColor: 'text-on-surface-variant', bg: 'bg-surface-container-low' },
  { label: 'Dipinjam (Check-out)', value: '388', icon: 'assignment_turned_in', iconFill: false, iconColor: 'text-secondary', bg: 'bg-surface-container-low' },
  { label: 'Rusak / Karantina', value: '47', icon: 'warning', iconFill: false, iconColor: 'text-error', bg: 'bg-error-container/50' },
  { label: 'Disposal Siap Lelang', value: '132', icon: 'delete_sweep', iconFill: false, iconColor: 'text-outline', bg: 'bg-surface-container-low' },
  { label: 'Kepatuhan RFID/QR', value: '99.4%', icon: 'verified', iconFill: false, iconColor: 'text-primary-fixed', bg: 'bg-tertiary-container', isPrimary: true },
]

const statuses = [
  { value: 'aktif', label: 'Aktif' },
  { value: 'maintenance', label: 'Maintenance' },
  { value: 'dipinjam', label: 'Dipinjam' },
  { value: 'rusak', label: 'Kritis / Rusak' },
  { value: 'disposal', label: 'Disposal' },
]

const categoryOptions = [
  { id: 1, name: 'IT Hardware & Server', slug: 'it-hardware' },
  { id: 2, name: 'Mesin & Robotik Industri', slug: 'mesin-industri' },
  { id: 3, name: 'Armada Kendaraan Logistik', slug: 'kendaraan' },
  { id: 4, name: 'Peralatan Medis & Lab', slug: 'medis-lab' },
  { id: 5, name: 'Inventaris Fasilitas Kantor', slug: 'kantor' },
]

const locationOptions = [
  { id: 1, name: 'Kantor Pusat Jkt - Gedung A', code: 'KP-JKT' },
  { id: 2, name: 'Data Center Tier-3 Cibitung', code: 'DC-CBT' },
  { id: 3, name: 'Pabrik Perakitan Karawang', code: 'PB-KRW' },
  { id: 4, name: 'Hub Logistik Rungkut Sby', code: 'HUB-SBY' },
  { id: 5, name: 'Warehouse Sentral Cikarang', code: 'WH-CIKARANG' },
]

const userOptions = [
  { id: 1, full_name: 'Hendra Kusuma' },
  { id: 2, full_name: 'Bagas Prakoso' },
  { id: 3, full_name: 'Dedi Rusli' },
  { id: 4, full_name: 'Agus Suherman' },
  { id: 5, full_name: 'Nurul Novita, Ph.D' },
  { id: 6, full_name: 'Teguh Maulana' },
  { id: 7, full_name: 'Farah Anindya' },
]

function AssetFormModal({ open, onClose, onCreated, categories, locations, users }) {
  const { createAsset, loading, error, success, reset } = useCreateAsset()
  const [form, setForm] = useState({
    asset_tag: '',
    serial_number: '',
    name: '',
    specification: '',
    category_id: '',
    location_id: '',
    user_id: '',
    acquisition_value: '',
    acquisition_date: '',
    status: 'aktif',
    image_url: '',
    notes: '',
  })

  const prevOpenRef = useRef(false)
  useEffect(() => {
    if (open && !prevOpenRef.current) {
      reset()
      setForm({
        asset_tag: '',
        serial_number: '',
        name: '',
        specification: '',
        category_id: '',
        location_id: '',
        user_id: '',
        acquisition_value: '',
        acquisition_date: '',
        status: 'aktif',
        image_url: '',
        notes: '',
      })
    }
    prevOpenRef.current = open
  }, [open, reset])

  if (!open) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      asset_tag: form.asset_tag,
      serial_number: form.serial_number || null,
      name: form.name,
      specification: form.specification || null,
      category_id: form.category_id ? Number(form.category_id) : null,
      location_id: form.location_id ? Number(form.location_id) : null,
      user_id: form.user_id ? Number(form.user_id) : null,
      acquisition_value: form.acquisition_value ? Number(form.acquisition_value) : null,
      acquisition_date: form.acquisition_date || null,
      status: form.status,
      image_url: form.image_url || null,
      notes: form.notes || null,
    }
    const { data, error } = await createAsset(payload)
    if (!error && data) {
      onCreated?.(data)
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-surface-container-lowest rounded-xl shadow-md w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-space-lg border-b border-outline/15 flex items-center justify-between">
          <h3 className="font-headline-sm text-headline-sm font-semibold">Daftarkan Aset Baru</h3>
          <button onClick={onClose} className="p-1 rounded hover:bg-surface-container text-outline hover:text-on-surface" type="button">
            <span className="material-symbols-outlined text-[18px]">close</span>
          </button>
        </div>
        <form className="p-space-lg space-y-space-md" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <label className="flex flex-col gap-space-2xs">
              <span className="font-label-sm text-label-sm text-outline">Tag Aset</span>
              <input required name="asset_tag" value={form.asset_tag} onChange={handleChange} className="h-10 px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="AST-IT-2025-0001"/>
            </label>
            <label className="flex flex-col gap-space-2xs">
              <span className="font-label-sm text-label-sm text-outline">Serial Number</span>
              <input name="serial_number" value={form.serial_number} onChange={handleChange} className="h-10 px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="SN-12345"/>
            </label>
            <label className="flex flex-col gap-space-2xs md:col-span-2">
              <span className="font-label-sm text-label-sm text-outline">Nama Aset</span>
              <input required name="name" value={form.name} onChange={handleChange} className="h-10 px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="Nama aset"/>
            </label>
            <label className="flex flex-col gap-space-2xs md:col-span-2">
              <span className="font-label-sm text-label-sm text-outline">Spesifikasi</span>
              <textarea name="specification" value={form.specification} onChange={handleChange} rows="3" className="px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="Spesifikasi teknis"/>
            </label>
            <label className="flex flex-col gap-space-2xs">
              <span className="font-label-sm text-label-sm text-outline">Kategori</span>
              <select name="category_id" value={form.category_id} onChange={handleChange} className="h-10 px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary">
                <option value="">Pilih kategori</option>
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-space-2xs">
              <span className="font-label-sm text-label-sm text-outline">Lokasi</span>
              <select name="location_id" value={form.location_id} onChange={handleChange} className="h-10 px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary">
                <option value="">Pilih lokasi</option>
                {locations.map((l) => <option key={l.id} value={l.id}>{l.name}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-space-2xs">
              <span className="font-label-sm text-label-sm text-outline">PIC / Pengguna</span>
              <select name="user_id" value={form.user_id} onChange={handleChange} className="h-10 px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary">
                <option value="">Pilih pengguna</option>
                {users.map((u) => <option key={u.id} value={u.id}>{u.full_name}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-space-2xs">
              <span className="font-label-sm text-label-sm text-outline">Status</span>
              <select name="status" value={form.status} onChange={handleChange} className="h-10 px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary">
                {statuses.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </label>
            <label className="flex flex-col gap-space-2xs">
              <span className="font-label-sm text-label-sm text-outline">Nilai Perolehan</span>
              <input name="acquisition_value" value={form.acquisition_value} onChange={handleChange} className="h-10 px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="Rp 0"/>
            </label>
            <label className="flex flex-col gap-space-2xs">
              <span className="font-label-sm text-label-sm text-outline">Tanggal Perolehan</span>
              <input type="date" name="acquisition_date" value={form.acquisition_date} onChange={handleChange} className="h-10 px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary"/>
            </label>
            <label className="flex flex-col gap-space-2xs md:col-span-2">
              <span className="font-label-sm text-label-sm text-outline">URL Gambar</span>
              <input name="image_url" value={form.image_url} onChange={handleChange} className="h-10 px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="https://..."/>
            </label>
            <label className="flex flex-col gap-space-2xs md:col-span-2">
              <span className="font-label-sm text-label-sm text-outline">Catatan</span>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows="3" className="px-space-md bg-surface-container-low rounded-lg text-on-surface focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="Catatan tambahan"/>
            </label>
          </div>
          {error && <p className="text-error font-label-sm text-label-sm">Gagal menyimpan: {error.message}</p>}
          {success && <p className="text-secondary font-label-sm text-label-sm">Aset berhasil didaftarkan.</p>}
          <div className="flex items-center justify-end gap-space-xs pt-space-sm">
            <button type="button" onClick={onClose} className="px-space-md py-space-xs rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors">Batal</button>
            <button disabled={loading} type="submit" className="px-space-md py-space-xs rounded-lg bg-secondary hover:bg-secondary-container text-on-secondary font-label-md text-label-md font-semibold transition-colors shadow-sm disabled:opacity-70">
              {loading ? 'Menyimpan...' : 'Simpan Aset'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function KatalogAsetPage() {
  const { assets, loading, error, refetch } = useAssets()
  const [showForm, setShowForm] = useState(false)
  const [filterText, setFilterText] = useState('')
  const [selectedAssetId, setSelectedAssetId] = useState(null)

  const selectedAsset = assets.find((a) => a.id === selectedAssetId) || null

  const handleSelectAsset = (asset) => {
    setSelectedAssetId((prev) => (prev === asset.id ? null : asset.id))
  }

  const filteredAssets = useMemo(() => {
    if (!filterText.trim()) return assets
    const q = filterText.toLowerCase()
    return assets.filter((a) => {
      const text = `${a.asset_tag} ${a.serial_number} ${a.name} ${a.specification} ${a.category?.name} ${a.location?.name} ${a.user?.full_name}`.toLowerCase()
      return text.includes(q)
    })
  }, [assets, filterText])

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
                {loading ? 'Memuat...' : `${assets.length} Total Aset Terdata`}
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
            <button onClick={() => setShowForm(true)} className="flex items-center gap-space-xs h-9 px-space-lg bg-secondary hover:bg-secondary-container text-on-secondary rounded-lg font-label-md text-label-md font-semibold transition-all shadow-sm shadow-secondary/20" type="button">
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
              <input
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
                className="w-full h-10 pl-10 pr-10 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/30 transition-all"
                placeholder="Cari berdasarkan No Seri, Tag Aset, Nama, Spesifikasi, atau PIC..."
                type="text"
              />
              <span className="material-symbols-outlined absolute right-space-md top-1/2 -translate-y-1/2 text-[18px] text-outline cursor-pointer hover:text-on-surface">filter_list</span>
            </div>
            {/* Quick Select Filters */}
            <div className="flex items-center gap-space-xs flex-wrap sm:flex-nowrap">
              {/* Kategori */}
              <div className="relative min-w-[150px] flex-1 sm:flex-initial">
                <select className="w-full h-10 px-space-md pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/30 cursor-pointer">
                  <option value="">Semua Kategori</option>
                  {categoryOptions.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none">expand_more</span>
              </div>
              {/* Lokasi / Cabang */}
              <div className="relative min-w-[170px] flex-1 sm:flex-initial">
                <select className="w-full h-10 px-space-md pr-8 bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-secondary/30 cursor-pointer">
                  <option value="">Semua Lokasi / Hub</option>
                  {locationOptions.map(l => <option key={l.id} value={l.id}>{l.name}</option>)}
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
              <button onClick={() => setFilterText('')} className="h-10 w-10 bg-surface-container-low hover:bg-surface-container text-outline hover:text-on-surface rounded-lg flex items-center justify-center transition-colors shrink-0" title="Reset Semua Filter" type="button">
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
                <span className="font-label-md text-label-md text-on-surface font-medium">Pilih Semua ({filteredAssets.length} Terpilih)</span>
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
                {loading && (
                  <tr>
                    <td colSpan="9" className="py-space-lg text-center text-outline">Memuat data aset...</td>
                  </tr>
                )}
                {!loading && error && (
                  <tr>
                    <td colSpan="9" className="py-space-lg text-center text-error">Gagal memuat data: {error.message}</td>
                  </tr>
                )}
                {!loading && !error && filteredAssets.map((asset) => (
                  <tr key={asset.id} onClick={() => handleSelectAsset(asset)} className={`${asset.id === selectedAssetId ? 'bg-surface-container-low/60 hover:bg-surface-container' : 'hover:bg-surface-container-low'} transition-colors cursor-pointer group`}>
                    <td className="py-space-md pl-space-lg pr-space-xs text-center" onClick={(e) => e.stopPropagation()}>
                      <input checked={asset.id === selectedAssetId} onChange={() => handleSelectAsset(asset)} className="rounded text-secondary focus:ring-secondary w-4 h-4 accent-secondary cursor-pointer" type="checkbox"/>
                    </td>
                    <td className="py-space-md px-space-md whitespace-nowrap">
                      <div className="flex items-center gap-space-sm">
                        <div className={`w-8 h-8 rounded ${asset.id === selectedAssetId ? 'bg-surface-container-lowest' : 'bg-surface-container-low'} flex items-center justify-center ${asset.id === selectedAssetId ? 'text-primary-container shadow-sm' : 'text-on-surface-variant'}`}>
                          <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
                        </div>
                        <div className="flex flex-col">
                          <span className={`font-code-sm text-code-sm font-semibold ${asset.id === selectedAssetId ? 'text-secondary' : 'text-on-surface'}`}>{asset.asset_tag}</span>
                          <span className="font-label-sm text-label-sm text-outline">SN: {asset.serial_number || '-'}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-surface-container-high overflow-hidden shrink-0">
                          <img className="w-full h-full object-cover" data-alt={asset.name} src={asset.image_url || 'https://via.placeholder.com/80'} />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-title-md text-title-md text-on-surface font-semibold truncate group-hover:text-secondary transition-colors">{asset.name}</span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant truncate">{asset.specification}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md whitespace-nowrap">
                      <span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded bg-surface-container text-on-surface font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[14px] text-outline">dns</span>
                        {asset.category?.name || '-'}
                      </span>
                    </td>
                    <td className="py-space-md px-space-md">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface truncate">{asset.location?.name || '-'}</span>
                        <span className="font-label-sm text-label-sm text-outline truncate">{asset.location?.code ? `Kode: ${asset.location.code}` : ''}</span>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md whitespace-nowrap">
                      <div className="flex items-center gap-space-xs">
                        <span className="w-6 h-6 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm flex items-center justify-center font-bold">
                          {asset.user?.full_name?.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() || '?'}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm font-semibold text-on-surface leading-tight">{asset.user?.full_name || '-'}</span>
                          <span className="font-label-sm text-label-sm text-outline leading-none">PIC: {asset.user?.full_name || '-'}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-space-md px-space-md text-right whitespace-nowrap">
                      <span className="font-code-sm text-code-sm font-semibold text-on-surface">{asset.acquisition_value ? `Rp ${Number(asset.acquisition_value).toLocaleString('id-ID')}` : '-'}</span>
                      <span className="block font-label-sm text-label-sm text-outline">{asset.acquisition_date || ''}</span>
                    </td>
                    <td className="py-space-md px-space-md whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-label-sm text-label-sm font-bold uppercase tracking-wider ${asset.status === 'Aktif' ? 'bg-surface-container-high text-secondary' : asset.status === 'Kritis' ? 'bg-error-container/60 text-error' : 'bg-surface-container-high text-on-surface-variant'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${asset.status === 'Aktif' ? 'bg-secondary animate-pulse' : asset.status === 'Kritis' ? 'bg-error animate-ping' : 'bg-outline'}`}></span>
                        {asset.status}
                      </span>
                    </td>
                    <td className="py-space-md pr-space-lg pl-space-xs text-center whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
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
              <span>Menampilkan <strong className="text-on-surface font-semibold">1 - {filteredAssets.length}</strong> dari <strong className="text-on-surface font-semibold">{loading ? '...' : assets.length}</strong> entitas aset</span>
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
        {/* Right Column: Docked / Collapsible Asset Detail Panel */}
        <div className="w-full xl:w-[410px] shrink-0 bg-surface-container-lowest rounded-xl shadow-sm flex flex-col overflow-hidden">
          {selectedAsset ? (
            <>
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
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold leading-snug">{selectedAsset.name}</h3>
                    <span className="font-code-sm text-code-sm text-secondary font-semibold">{selectedAsset.asset_tag}</span>
                    <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm mt-1">
                      <span className="material-symbols-outlined text-[16px] text-outline">{selectedAsset.category?.slug === 'it-hardware' ? 'dns' : selectedAsset.category?.slug === 'mesin-industri' ? 'precision_manufacturing' : selectedAsset.category?.slug === 'kendaraan' ? 'local_shipping' : selectedAsset.category?.slug === 'medis-lab' ? 'biotech' : 'bolt'}</span>
                      <span>{selectedAsset.location?.name || '-'} / {selectedAsset.location?.code || ''}</span>
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
                      <span className="font-code-sm text-code-sm font-bold text-on-surface">{selectedAsset.acquisition_value ? `Rp ${Number(selectedAsset.acquisition_value / 1000000).toFixed(0)} Jt` : '-'}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-[11px] text-outline">Akum. Depresiasi</span>
                      <span className="font-code-sm text-code-sm font-bold text-outline">-</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-[11px] text-outline">Nilai Buku Sisa</span>
                      <span className="font-code-sm text-code-sm font-bold text-secondary">{selectedAsset.acquisition_value ? `Rp ${Number(selectedAsset.acquisition_value * 0.8 / 1000000).toFixed(0)} Jt` : '-'}</span>
                    </div>
                  </div>
                  {/* Progress Visualizer for Depreciation */}
                  <div className="flex flex-col gap-1">
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden flex">
                      <div className="h-full bg-secondary rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <div className="flex justify-between text-[11px] font-label-sm text-outline">
                      <span>Sisa Umur Ekonomis: 48 Bulan</span>
                      <span>80.0% Terisa</span>
                    </div>
                  </div>
                </div>
                {/* Specifications & Technical Identity */}
                <div className="flex flex-col gap-space-xs text-body-sm font-body-sm">
                  <span className="font-label-sm text-label-sm text-outline uppercase font-bold tracking-wider">Identifikasi Teknis</span>
                  <div className="bg-surface-container-low p-space-md rounded-xl space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-outline">Nomor Seri (Serial No)</span>
                      <span className="font-code-sm text-code-sm font-semibold text-on-surface">{selectedAsset.serial_number || '-'}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-outline">Primary MAC Address</span>
                      <span className="font-code-sm text-code-sm font-semibold text-on-surface">00:1A:2B:3C:4D:5E</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-outline">Vendor Penyedia</span>
                      <span className="font-medium text-on-surface">-</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-outline">Status Garansi Pabrik</span>
                      <span className="font-semibold text-secondary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">verified_user</span>
                        Aktif s/d 31 Des 2026
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-outline">PIC Penanggung Jawab</span>
                      <span className="font-medium text-on-surface">{selectedAsset.user?.full_name || '-'}</span>
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
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Update BIOS & pengujian sistem normal.</span>
                    </div>
                    {/* Milestone 2 */}
                    <div className="relative flex flex-col">
                      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-surface-container-highest"></div>
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-bold text-on-surface">Deployment ke {selectedAsset.location?.name || 'Lokasi'}</span>
                        <span className="font-code-sm text-[11px] text-outline">{selectedAsset.acquisition_date || '-'}</span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Instalasi & konfigurasi awal.</span>
                    </div>
                    {/* Milestone 3 */}
                    <div className="relative flex flex-col">
                      <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-surface-container-highest"></div>
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-bold text-on-surface">Pengadaan</span>
                        <span className="font-code-sm text-[11px] text-outline">{selectedAsset.acquisition_date || '-'}</span>
                      </div>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">Penerimaan fisik & tagging.</span>
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
            </>
          ) : (
            <div className="p-space-lg text-center text-outline font-label-sm text-label-sm">Pilih satu aset untuk melihat detail.</div>
          )}
        </div>
      </div>
      <AssetFormModal
        open={showForm}
        onClose={() => setShowForm(false)}
        onCreated={() => refetch()}
        categories={categoryOptions}
        locations={locationOptions}
        users={userOptions}
      />
    </div>
  )
}
