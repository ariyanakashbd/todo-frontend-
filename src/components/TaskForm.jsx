import { useState } from 'react'

// One form for both Add and Edit.
// - editingTask is null  -> Add mode (empty form)
// - editingTask has data -> Edit mode (form is filled)
function TaskForm({ editingTask, onSave, onCancel }) {
  const [title, setTitle] = useState(editingTask ? editingTask.title : '')
  const [description, setDescription] = useState(editingTask ? editingTask.description : '')
  const [priority, setPriority] = useState(editingTask ? editingTask.priority : 'Medium')
  const [status, setStatus] = useState(editingTask ? editingTask.status : 'Pending')

  function handleSubmit(event) {
    event.preventDefault()
    onSave({ title, description, priority, status })
  }

  const inputStyle =
    'w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 space-y-4">
      <h3 className="text-lg font-semibold text-slate-800">
        {editingTask ? 'Edit Task' : 'Add New Task'}
      </h3>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Task Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter task title"
          className={inputStyle}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
        <textarea
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          className={inputStyle}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)} className={inputStyle}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className={inputStyle}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
        >
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-slate-200 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default TaskForm
