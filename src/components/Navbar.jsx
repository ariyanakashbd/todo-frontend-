import { Menu, User } from 'lucide-react'

// Top navbar of the dashboard
function Navbar({ onMenuClick }) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-3">
        {/* Menu button (only on mobile and tablet) */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-slate-100" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <h2 className="font-semibold text-slate-800">Dashboard</h2>
      </div>

      {/* User profile */}
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          {/* TODO (backend): show the real user name and email here */}
          <p className="text-sm font-medium text-slate-800">Demo User</p>
          <p className="text-xs text-slate-500">demo@example.com</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
          <User size={20} />
        </div>
      </div>
    </header>
  )
}

export default Navbar
