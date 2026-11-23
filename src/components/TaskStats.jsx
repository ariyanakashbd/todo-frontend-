import { ListTodo, CheckCircle2, Clock, Flame } from 'lucide-react'

// Shows 4 cards. The numbers are counted from the tasks list.
function TaskStats({ tasks }) {
  const total = tasks.length
  const completed = tasks.filter((task) => task.status === 'Completed').length
  const pending = tasks.filter((task) => task.status === 'Pending').length
  const highPriority = tasks.filter((task) => task.priority === 'High').length

  const cards = [
    { title: 'Total Tasks', value: total, icon: ListTodo, color: 'bg-indigo-100 text-indigo-600' },
    { title: 'Completed Tasks', value: completed, icon: CheckCircle2, color: 'bg-emerald-100 text-emerald-600' },
    { title: 'Pending Tasks', value: pending, icon: Clock, color: 'bg-yellow-100 text-yellow-600' },
    { title: 'High Priority Tasks', value: highPriority, icon: Flame, color: 'bg-red-100 text-red-600' },
  ]

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl border border-slate-200 p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
        >
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${card.color}`}>
            <card.icon size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500">{card.title}</p>
            <p className="text-2xl font-bold text-slate-800">{card.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TaskStats
