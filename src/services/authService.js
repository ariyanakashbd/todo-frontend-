import { apiRequest } from './api'

// ===================================================
// AUTH API FUNCTIONS
// Replace each placeholder endpoint with your real one.
// ===================================================

// Example usage: await registerUser({ fullName, email, password })
export async function registerUser(userData) {
  // TODO: replace 'YOUR_REGISTER_ENDPOINT' (example: '/auth/register')
  return await apiRequest('YOUR_REGISTER_ENDPOINT', 'POST', userData)
}

// Example usage: await loginUser({ email, password })
export async function loginUser(loginData) {
  // TODO: replace 'YOUR_LOGIN_ENDPOINT' (example: '/auth/login')
  return await apiRequest('YOUR_LOGIN_ENDPOINT', 'POST', loginData)
}

export async function logoutUser() {
  // TODO: replace 'YOUR_LOGOUT_ENDPOINT' (example: '/auth/logout')
  return await apiRequest('YOUR_LOGOUT_ENDPOINT', 'POST')
}
