import { useState, useEffect } from 'react'
import ReminderRepository from '../../data/repository/reminder.repository'
import { GetReminders } from '../../domain/usecases/GetReminders'
import { CreateReminder } from '../../domain/usecases/CreateReminder'
import { UpdateReminder } from '../../domain/usecases/UpdateRemider'
import { DeleteReminder } from '../../domain/usecases/DeleteReminder'

const reminderRepository = new ReminderRepository()

const getRemindersUseCase = GetReminders(reminderRepository)
const createReminderUseCase = CreateReminder(reminderRepository)
const updateReminderUseCase = UpdateReminder(reminderRepository)
const deleteReminderUseCase = DeleteReminder(reminderRepository)

export default function useReminders() {
  const [reminders, setReminders] = useState([])
  const [loading, setLoading] = useState(false)
  const [editingReminder, setEditingReminder] = useState(null)

  useEffect(() => {
    fetchReminders()
  }, [])

  const fetchReminders = async () => {
    setLoading(true)
    try {
      const reminders = await getRemindersUseCase()
      setReminders(reminders)
    } catch (error) {
      console.error('Error fetching reminders:', error)
    } finally {
      setLoading(false)
    }
  }

  const createReminder = async (reminderData) => {
    try {
      await createReminderUseCase(reminderData)
      await fetchReminders()
    } catch (error) {
      console.error('Error creating reminder:', error)
    }
  }

  const updateReminder = async (reminderData) => {
    try {
      await updateReminderUseCase(reminderData.id, reminderData)
      setEditingReminder(null)
      await fetchReminders()
    } catch (error) {
      console.error('Error updating reminder:', error)
    }
  }

  const deleteReminder = async (id) => {
    try {
      await deleteReminderUseCase(id)
      await fetchReminders()
    } catch (error) {
      console.error('Error deleting reminder:', error)
    }
  }

  return {
    reminders,
    loading,
    editingReminder,
    setEditingReminder,
    createReminder,
    updateReminder,
    deleteReminder
  }
}
