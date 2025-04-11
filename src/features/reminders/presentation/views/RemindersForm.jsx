import React from 'react';
import { useReminderFormViewModel } from '../viewmodels/ReminderFormView';

export const ReminderForm = ({ onSubmit, editingReminder, onCancelEdit }) => {
  const {
    title,
    description,
    dateTime,
    isEditing,
    handlers
  } = useReminderFormViewModel({ onSubmit, editingReminder, onCancelEdit });

  return (
    <form onSubmit={handlers.handleSubmit} className="reminder-form">
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => handlers.setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Descripción</label>
        <textarea
          value={description}
          onChange={(e) => handlers.setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Fecha y Hora</label>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => handlers.setDateTime(e.target.value)}
          required
        />
      </div>
      <div className="form-actions">
        {isEditing ? (
          <>
            <button type="submit">Actualizar Recordatorio</button>
            <button type="button" onClick={handlers.onCancelEdit}>
              Cancelar
            </button>
          </>
        ) : (
          <button type="submit">Crear Recordatorio</button>
        )}
      </div>
    </form>
  );
};