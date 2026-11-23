import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CheckSquare, Eye, EyeOff } from 'lucide-react'
// import { loginUser } from '../services/authService'   // <- use this later

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState(localStorage.getItem('rememberedEmail') || '')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(!!localStorage.getItem('rememberedEmail'))

  async function handleSubmit(event) {
    event.preventDefault()

    // Remember me: store the email so it is filled next time
    if (rememberMe) {
      localStorage.setItem('rememberedEmail', email)
    } else {
      localStorage.removeItem('rememberedEmail')
    }

    // TODO (backend): call your API here, for example:
    // await loginUser({ email, password })

    // For now we only go to the dashboard (no real login).
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
            <CheckSquare size={26} />
          </div>
          <h1 className="mt-4 text-2xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-slate-500 text-sm mt-1">Login to your account</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2.5 pr-12 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-indigo-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember me */}
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 accent-indigo-600"
            />
            <label className="text-sm text-slate-600">Remember me</label>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-indigo-600 font-medium hover:underline">Register</Link>
        </p>
        <p className="mt-2 text-center text-xs text-slate-500">
          By logging in, you agree to our{' '}
          <span className="text-indigo-600 font-medium hover:underline cursor-pointer">
            Terms &amp; Conditions
          </span>
        </p>
        <p className="mt-2 text-center text-sm">
          <Link to="/" className="text-slate-500 hover:text-indigo-600">← Back to Home</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
