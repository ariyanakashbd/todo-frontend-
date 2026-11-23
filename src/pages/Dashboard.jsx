import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import DashboardHome from '../components/DashboardHome'

// This is the ONLY dashboard page. All features live inside DashboardHome.
function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 lg:flex">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 min-w-0 flex flex-col">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4 sm:p-6">
          <DashboardHome />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
