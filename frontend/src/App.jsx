import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import DashboardPage from './pages/DashboardPage'
import KatalogAsetPage from './pages/KatalogAsetPage'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentPath, setCurrentPath] = useState('dashboard-eksekutif')

  const renderPage = () => {
    switch (currentPath) {
      case 'inventaris-katalog-aset':
        return <KatalogAsetPage />
      default:
        return <DashboardPage />
    }
  }

  return (
    <div className="flex min-h-screen bg-surface text-on-surface antialiased">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} currentPath={currentPath} onNavigate={setCurrentPath} />
      <div className="flex flex-col min-h-screen w-full lg:pl-64">
        <Header onToggleSidebar={() => setSidebarOpen((v) => !v)} />
        <main className="w-full pt-16 bg-surface flex-1">
          <div className="flex flex-col w-full">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
