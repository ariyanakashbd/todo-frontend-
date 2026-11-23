import { Search } from 'lucide-react'

const statusOptions = [
  { label: 'All Tasks', value: 'All' },
  { label: 'Pending', value: 'Pending' },
  { label: 'In Progress', value: 'In Progress' },
  { label: 'Completed', value: 'Completed' },
]

const priorityOptions = [
  { label: 'All Priority', value: 'All' },
  { label: 'Low Priority', value: 'Low' },
  { label: 'Medium Priority', value: 'Medium' },
  { label: 'High Priority', value: 'High' },
]

// One small button. It looks different when it is selected.
function FilterButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
        isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
      }`}
    >
      {label}
    </button>
  )
}

function TaskFilter({ search, setSearch, statusFilter, setStatusFilter, priorityFilter, setPriorityFilter }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 space-y-4">
      {/* Search */}
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search tasks..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Status filter */}
      <div className="flex flex-wrap gap-2">
        {statusOptions.map((option) => (
          <FilterButton
            key={option.value}
            label={option.label}
            isActive={statusFilter === option.value}
            onClick={() => setStatusFilter(option.value)}
          />
        ))}
      </div>

      {/* Priority filter */}
      <div className="flex flex-wrap gap-2">
        {priorityOptions.map((option) => (
          <FilterButton
            key={option.value}
            label={option.label}
            isActive={priorityFilter === option.value}
            onClick={() => setPriorityFilter(option.value)}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskFilter
