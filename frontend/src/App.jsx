import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsGrid from './components/StatsGrid'
import ChartsSection from './components/ChartsSection'
import PriorityAlerts from './components/PriorityAlerts'
import MaintenanceTable from './components/MaintenanceTable'
import QuickActions from './components/QuickActions'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-surface text-on-surface antialiased">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex flex-col min-h-screen w-full lg:pl-64">
        <Header onToggleSidebar={() => setSidebarOpen((v) => !v)} />
        <main className="w-full pt-16 bg-surface flex-1">
          <div className="flex flex-col w-full">
            <div className="p-space-xl space-y-space-xl">
              <StatsGrid />
              <ChartsSection />
              <PriorityAlerts />
              <MaintenanceTable />
              <QuickActions />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
