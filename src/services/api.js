// ===================================================
// API CONFIGURATION (one place for backend settings)
// ===================================================

// TODO: Put your backend URL here later.
export const API_BASE_URL = 'YOUR_BACKEND_URL_HERE'

// All service files use this function to talk to the backend.
export async function apiRequest(endpoint, method = 'GET', body = null) {
  const options = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
    // Lets the browser send cookies (if your backend uses cookies for login)
    credentials: 'include',
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  const response = await fetch(API_BASE_URL + endpoint, options)
  const data = await response.json()

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }

  return data
}
