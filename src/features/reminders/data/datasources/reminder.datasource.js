const API_URL = 'http://localhost:8080/reminders'

export const ReminderDatasource = {
  async getAll() {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error('Error fetching reminders')
    return await response.json()
  },

  async getById(id) {
    const response = await fetch(`${API_URL}/${id}`)
    if (!response.ok) throw new Error('Error fetching reminder')
    return await response.json()
  },

  async create(reminder) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reminder),
    })
    if (!response.ok) throw new Error('Error creating reminder')
    return await response.json()
  },

  async update(reminder) {
    const response = await fetch(`${API_URL}/${reminder.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reminder),
    })
    if (!response.ok) throw new Error('Error updating reminder')
    return await response.json()
  },

  async delete(id) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    })
    if (!response.ok) throw new Error('Error deleting reminder')
    return true
  }
}