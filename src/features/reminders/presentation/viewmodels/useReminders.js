import { useState, useEffect } from 'react';

export default function useReminders() {
  const [reminders, setReminders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingReminder, setEditingReminder] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setReminders([]);
      setLoading(false);
    }, 1000);
  }, []);

  const createReminder = (newReminder) => {
    setReminders(prev => [...prev, { ...newReminder, ID: Date.now() }]);
  };

  const updateReminder = (updatedReminder) => {
    setReminders(prev =>
      prev.map(r => (r.ID === updatedReminder.id ? { ...r, ...updatedReminder } : r))
    );
    setEditingReminder(null);
  };

  const deleteReminder = (id) => {
    setReminders(prev => prev.filter(r => r.ID !== id));
  };

  const handleSubmit = (reminderData) => {
    if (reminderData.id) {
      updateReminder(reminderData);
    } else {
      createReminder(reminderData);
    }
  };

  return {
    reminders,
    loading,
    editingReminder,
    setEditingReminder,
    createReminder,
    updateReminder,
    deleteReminder,
    handleSubmit
  };
}
