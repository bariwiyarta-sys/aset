const categories = [
  { label: 'IT & Server Hardware', value: 'Rp 19,40 M', percent: 72 },
  { label: 'Mesin & Produksi', value: 'Rp 14,20 M', percent: 65 },
  { label: 'Kendaraan Dinas', value: 'Rp 6,80 M', percent: 50 },
  { label: 'Perlengkapan Kantor', value: 'Rp 2,45 M', percent: 38 },
]

export default function CategoryBreakdown() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-md pt-space-lg bg-surface-container-low/40 rounded-xl p-space-md mt-space-md">
      {categories.map((cat) => (
        <div key={cat.label} className="space-y-space-2xs">
          <span className="font-label-sm text-label-sm text-outline">{cat.label}</span>
          <div className="font-title-md text-title-md text-on-surface font-semibold">{cat.value}</div>
          <div className="w-full bg-surface-container-high h-1.5 rounded-full overflow-hidden">
            <div className="bg-secondary h-full rounded-full" style={{ width: `${cat.percent}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  )
}
