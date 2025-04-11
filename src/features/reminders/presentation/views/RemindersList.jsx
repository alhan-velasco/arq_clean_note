import React from 'react';
import { useRemindersListViewModel } from '../viewmodels/RemindersListViewModel';

export default function RemindersList({ reminders, loading, onEdit, onDelete }) {
  const {
    processedReminders,
    contentMessage,
    handlers
  } = useRemindersListViewModel({ reminders, loading, onEdit, onDelete });

  if (contentMessage) return <p>{contentMessage}</p>;

  return (
    <div className="list-container">
      {processedReminders.map((reminder, index) => (
        <div key={reminder.ID || index} className="item-card">
          <h3>{reminder.Title}</h3>
          <p>{reminder.Description}</p>
          <p className="reminder-date">{reminder.DateTime}</p>
          <div className="item-actions">
            <button onClick={() => handlers.edit(reminder)}>
              Editar
            </button>
            <button 
              className="delete" 
              onClick={() => handlers.delete(reminder.ID)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}