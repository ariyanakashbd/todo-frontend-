import { useState } from 'react'
import { Plus } from 'lucide-react'
import TaskStats from './TaskStats'
import TaskForm from './TaskForm'
import TaskFilter from './TaskFilter'
import TaskList from './TaskList'
import TaskDetails from './TaskDetails'
// import { getTasks, createTask, updateTask, deleteTask } from '../services/taskService'   // <- use these later

// Temporary demo tasks. TODO (backend): remove these and load tasks with getTasks()
const demoTasks = [
  { id: 1, title: 'Design home page', description: 'Create the landing page layout.', priority: 'High', status: 'In Progress', createdDate: '2026-11-20' },
  { id: 2, title: 'Buy groceries', description: 'Milk, eggs and bread.', priority: 'Low', status: 'Pending', createdDate: '2026-11-21' },
  { id: 3, title: 'Write report', description: 'Finish the weekly report.', priority: 'Medium', status: 'Completed', createdDate: '2026-11-22' },
]

function DashboardHome() {
  // ----- Data -----
  const [tasks, setTasks] = useState(demoTasks)

  // ----- Filters -----
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [priorityFilter, setPriorityFilter] = useState('All')

  // ----- Form and details popup -----
  const [showForm, setShowForm] = useState(false)
  const [editingTask, setEditingTask] = useState(null) // null = adding a new task
  const [viewingTask, setViewingTask] = useState(null)

  // ----- Functions -----
  function handleAddClick() {
    setEditingTask(null)
    setShowForm(true)
  }

  function handleEditClick(task) {
    setEditingTask(task)
    setShowForm(true)
  }

  function handleCancel() {
    setShowForm(false)
    setEditingTask(null)
  }

  function handleSaveTask(formData) {
    if (editingTask) {
      // TODO (backend): await updateTask(editingTask.id, formData)
      setTasks(tasks.map((task) => (task.id === editingTask.id ? { ...task, ...formData } : task)))
    } else {
      // TODO (backend): const newTask = await createTask(formData)
      const newTask = {
        id: Date.now(),
        ...formData,
        createdDate: new Date().toISOString().slice(0, 10),
      }
      setTasks([newTask, ...tasks])
    }
    handleCancel()
  }

  function handleDelete(taskId) {
    // TODO (backend): await deleteTask(taskId)
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  function handleStatusChange(taskId, newStatus) {
    // TODO (backend): await updateTask(taskId, { status: newStatus })
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task)))
  }

  function handlePriorityChange(taskId, newPriority) {
    // TODO (backend): await updateTask(taskId, { priority: newPriority })
    setTasks(tasks.map((task) => (task.id === taskId ? { ...task, priority: newPriority } : task)))
  }

  // Search + status filter + priority filter work together
  const visibleTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase())
    const matchesStatus = statusFilter === 'All' || task.status === statusFilter
    const matchesPriority = priorityFilter === 'All' || task.priority === priorityFilter
    return matchesSearch && matchesStatus && matchesPriority
  })

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Welcome message */}
      <section id="overview" className="scroll-mt-20">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">Welcome back, Demo User 👋</h1>
        <p className="text-slate-500 mt-1">Here is what is happening with your tasks today.</p>
      </section>

      {/* Statistics */}
      <section id="stats" className="scroll-mt-20">
        <TaskStats tasks={tasks} />
      </section>

      {/* Tasks */}
      <section id="tasks" className="scroll-mt-20 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-800">My Tasks</h2>
          <button
            onClick={handleAddClick}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors"
          >
            <Plus size={18} />
            New Task
          </button>
        </div>

        {/* The key makes the form reset when we switch between add and edit */}
        {showForm && (
          <TaskForm
            key={editingTask ? editingTask.id : 'new'}
            editingTask={editingTask}
            onSave={handleSaveTask}
            onCancel={handleCancel}
          />
        )}

        <TaskFilter
          search={search}
          setSearch={setSearch}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          priorityFilter={priorityFilter}
          setPriorityFilter={setPriorityFilter}
        />

        <TaskList
          tasks={visibleTasks}
          onView={setViewingTask}
          onEdit={handleEditClick}
          onDelete={handleDelete}
          onStatusChange={handleStatusChange}
          onPriorityChange={handlePriorityChange}
        />
      </section>

      {/* Task details popup */}
      {viewingTask && <TaskDetails task={viewingTask} onClose={() => setViewingTask(null)} />}
    </div>
  )
}

export default DashboardHome
