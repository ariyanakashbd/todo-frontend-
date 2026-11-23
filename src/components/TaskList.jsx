import TaskCard from './TaskCard'

// Shows many TaskCard components in a responsive grid.
function TaskList({ tasks, onView, onEdit, onDelete, onStatusChange, onPriorityChange }) {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-dashed border-slate-300 p-10 text-center text-slate-500">
        No tasks found.
      </div>
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onView={onView}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
          onPriorityChange={onPriorityChange}
        />
      ))}
    </div>
  )
}

export default TaskList
