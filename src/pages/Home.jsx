import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  CheckSquare,
  Menu,
  X,
  ListTodo,
  Search,
  Flag,
  BarChart3,
  CheckCircle2,
} from 'lucide-react'

const features = [
  { icon: ListTodo, title: 'Manage Tasks', text: 'Add, edit and delete tasks in one simple place.' },
  { icon: Flag, title: 'Set Priority', text: 'Mark every task as Low, Medium or High priority.' },
  { icon: Search, title: 'Search & Filter', text: 'Find any task fast by search, status or priority.' },
  { icon: BarChart3, title: 'Live Statistics', text: 'See your total, completed and pending tasks at a glance.' },
]

const reasons = [
  'Clean and easy to use',
  'Works on desktop, tablet and mobile',
  'Track progress with simple statuses',
  'Fast and lightweight',
]

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white text-slate-800">
      {/* ---------- Navbar ---------- */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
            <CheckSquare size={26} />
            TaskFlow
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-600 hover:text-indigo-600 transition-colors">
              Home
            </Link>
            <Link to="/login" className="px-4 py-2 rounded-lg text-indigo-600 border border-indigo-600 hover:bg-indigo-50 transition-colors">
              Login
            </Link>
            <Link to="/register" className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors">
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 flex flex-col gap-3 border-t border-slate-100">
            <Link to="/" className="pt-3 text-slate-600">Home</Link>
            <Link to="/login" className="px-4 py-2 rounded-lg text-center text-indigo-600 border border-indigo-600">
              Login
            </Link>
            <Link to="/register" className="px-4 py-2 rounded-lg text-center bg-indigo-600 text-white">
              Register
            </Link>
          </div>
        )}
      </header>

      {/* ---------- Hero Section ---------- */}
      <section className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900">
            Manage Your <span className="text-indigo-600">Tasks</span> Easily
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Organize your work, set priorities and track your progress.
            Everything you need to stay productive is in one clean dashboard.
          </p>
          <Link
            to="/register"
            className="inline-block mt-8 px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* ---------- Features Section ---------- */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <p className="text-center text-slate-500 mt-2">Everything you need to manage your tasks</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center">
                <feature.icon size={24} />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{feature.title}</h3>
              <p className="mt-2 text-slate-500 text-sm">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Why Choose Section ---------- */}
      <section className="bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center">Why Choose Our Todo App</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200">
                <CheckCircle2 className="text-green-500 shrink-0" size={22} />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="bg-slate-900 text-slate-400">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-white font-semibold">
            <CheckSquare size={20} />
            TaskFlow
          </div>
          <p className="text-sm">© 2026 TaskFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Home
