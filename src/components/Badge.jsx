// A small colored label. Used for both priority and status.
const colors = {
  Low: 'bg-green-100 text-green-700',
  Medium: 'bg-yellow-100 text-yellow-700',
  High: 'bg-red-100 text-red-700',
  Pending: 'bg-slate-100 text-slate-700',
  'In Progress': 'bg-blue-100 text-blue-700',
  Completed: 'bg-emerald-100 text-emerald-700',
}

function Badge({ text }) {
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[text]}`}>
      {text}
    </span>
  )
}

export default Badge
