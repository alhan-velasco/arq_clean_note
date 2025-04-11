import React from 'react';

function RemindersList({ 
  reminders, 
  loading, 
  onEdit, 
  onDelete 
}) {
  if (loading) return React.createElement('p', null, 'Cargando recordatorios...');
  if (reminders.length === 0) return React.createElement('p', null, 'No hay recordatorios creados');

  return React.createElement('div', { className: 'list-container' },
    reminders.map((reminder, index) => {
      console.log('Reminder:', reminder);
      return React.createElement('div', 
        { key: reminder.ID || index, className: 'item-card' },
        React.createElement('h3', null, reminder.Title),
        React.createElement('p', null, reminder.Description),
        React.createElement('p', { className: 'reminder-date' }, reminder.DateTime),
        React.createElement('div', { className: 'item-actions' },
          React.createElement('button', 
            { 
              onClick: () => onEdit({
                id: reminder.ID,
                title: reminder.Title,
                description: reminder.Description,
                dateTime: reminder.DateTime
              })
            }, 
            'Editar'
          ),
          React.createElement('button', 
            { 
              className: 'delete',
              onClick: () => onDelete(reminder.ID)
            }, 
            'Eliminar'
          )
        )
      );
    })
  );
}

export default RemindersList;