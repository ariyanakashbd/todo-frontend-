import { apiRequest } from './api'

// ===================================================
// TASK API FUNCTIONS
// Replace each placeholder endpoint with your real one.
// ===================================================

export async function getTasks() {
  // TODO: replace 'YOUR_GET_TASKS_ENDPOINT'
  return await apiRequest('YOUR_GET_TASKS_ENDPOINT', 'GET')
}

export async function createTask(taskData) {
  // TODO: replace 'YOUR_CREATE_TASK_ENDPOINT'
  return await apiRequest('YOUR_CREATE_TASK_ENDPOINT', 'POST', taskData)
}

export async function updateTask(taskId, taskData) {
  // TODO: replace 'YOUR_UPDATE_TASK_ENDPOINT' (usually it includes the task id)
  return await apiRequest('YOUR_UPDATE_TASK_ENDPOINT/' + taskId, 'PUT', taskData)
}

export async function deleteTask(taskId) {
  // TODO: replace 'YOUR_DELETE_TASK_ENDPOINT' (usually it includes the task id)
  return await apiRequest('YOUR_DELETE_TASK_ENDPOINT/' + taskId, 'DELETE')
}
