import { X } from 'lucide-react'
import Badge from './Badge'

// A popup that shows full details of one task.
function TaskDetails({ task, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-slate-800">{task.title}</h3>
          <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-100">
            <X size={22} />
          </button>
        </div>

        <div className="mt-3 flex gap-2">
          <Badge text={task.priority} />
          <Badge text={task.status} />
        </div>

        <p className="mt-5 text-sm font-medium text-slate-500">Description</p>
        <p className="mt-1 text-slate-700 whitespace-pre-wrap">{task.description || 'No description'}</p>

        <p className="mt-5 text-sm text-slate-400">Created: {task.createdDate}</p>

        <button
          onClick={onClose}
          className="mt-6 w-full py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  )
}

export default TaskDetails
