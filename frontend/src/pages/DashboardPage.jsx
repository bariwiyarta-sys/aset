import StatsGrid from '../components/StatsGrid'
import ChartsSection from '../components/ChartsSection'
import PriorityAlerts from '../components/PriorityAlerts'
import MaintenanceTable from '../components/MaintenanceTable'
import QuickActions from '../components/QuickActions'

export default function DashboardPage() {
  return (
    <div className="p-space-xl space-y-space-xl">
      <StatsGrid />
      <ChartsSection />
      <PriorityAlerts />
      <MaintenanceTable />
      <QuickActions />
    </div>
  )
}
