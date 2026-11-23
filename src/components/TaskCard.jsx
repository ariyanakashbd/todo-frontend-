import { Pencil, Trash2, Eye } from 'lucide-react'
import Badge from './Badge'

// Shows ONE task as a card.
function TaskCard({ task, onView, onEdit, onDelete, onStatusChange, onPriorityChange }) {
  const selectStyle =
    'w-full px-2 py-1.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col hover:shadow-md transition-shadow">
      {/* Badges */}
      <div className="flex flex-wrap gap-2">
        <Badge text={task.priority} />
        <Badge text={task.status} />
      </div>

      {/* Title + description */}
      <h3 className="mt-3 font-semibold text-slate-800">{task.title}</h3>
      <p className="mt-1 text-sm text-slate-500 line-clamp-2">{task.description}</p>
      <p className="mt-3 text-xs text-slate-400">Created: {task.createdDate}</p>

      {/* Change status and priority */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        <select value={task.status} onChange={(e) => onStatusChange(task.id, e.target.value)} className={selectStyle}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <select value={task.priority} onChange={(e) => onPriorityChange(task.id, e.target.value)} className={selectStyle}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      {/* Action icons */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2 justify-end">
        <button onClick={() => onView(task)} className="p-2 rounded-lg text-slate-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors" title="View details">
          <Eye size={18} />
        </button>
        <button onClick={() => onEdit(task)} className="p-2 rounded-lg text-slate-500 hover:bg-yellow-50 hover:text-yellow-600 transition-colors" title="Edit">
          <Pencil size={18} />
        </button>
        <button onClick={() => onDelete(task.id)} className="p-2 rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors" title="Delete">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  )
}

export default TaskCard
