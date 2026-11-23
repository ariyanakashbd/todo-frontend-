import { Link } from 'react-router-dom'
import { CheckSquare, LayoutDashboard, BarChart3, ListTodo, LogOut, X } from 'lucide-react'
// import { logoutUser } from '../services/authService'   // <- use this later

// These links scroll to a section inside the same Dashboard page.
const menuItems = [
  { name: 'Overview', href: '#overview', icon: LayoutDashboard },
  { name: 'Statistics', href: '#stats', icon: BarChart3 },
  { name: 'My Tasks', href: '#tasks', icon: ListTodo },
]

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Dark background on mobile when the sidebar is open */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 lg:hidden" onClick={onClose}></div>
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-200 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Logo */}
        <div className="h-16 px-5 flex items-center justify-between border-b border-slate-200">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
            <CheckSquare size={26} />
            TaskFlow
          </div>
          <button className="lg:hidden p-1 rounded hover:bg-slate-100" onClick={onClose}>
            <X size={22} />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={onClose}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
            >
              <item.icon size={20} />
              {item.name}
            </a>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-slate-200">
          {/* TODO (backend): call logoutUser() before going to the home page */}
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={20} />
            Logout
          </Link>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
