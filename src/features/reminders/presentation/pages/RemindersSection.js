import useReminders from '../viewmodels/useReminders';
import ReminderForm from '../views/RemindersForm';
import RemindersList from '../views/RemindersList';
import React from 'react';

export default function RemindersSection() {
  const {
    reminders,
    loading,
    editingReminder,
    setEditingReminder,
    deleteReminder,
    handleSubmit
  } = useReminders();

  return React.createElement(
    'div',
    { className: 'section-container' },
    React.createElement('h2', { className: 'section-title' }, 'Recordatorios'),
    React.createElement(ReminderForm, {
      onSubmit: handleSubmit,
      editingReminder: editingReminder,
      onCancelEdit: () => setEditingReminder(null)
    }),
    React.createElement(RemindersList, {
      reminders: reminders,
      loading: loading,
      onEdit: setEditingReminder,
      onDelete: deleteReminder
    })
  );
}