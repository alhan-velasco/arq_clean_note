import { useState, useEffect } from 'react';

export default function ReminderForm({ 
  onSubmit, 
  editingReminder, 
  onCancelEdit 
}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');

  // Verifica si el valor de dateTime es válido antes de enviarlo
  const isValidDateTime = (date) => {
    return !isNaN(new Date(date).getTime());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidDateTime(dateTime)) {
      alert('Por favor, ingresa una fecha y hora válidas.');
      return;
    }

    onSubmit({
      title,
      description,
      dateTime: new Date(dateTime).toISOString(),
      ...(editingReminder && { id: editingReminder.id })
    });

    setTitle('');
    setDescription('');
    setDateTime('');
  };

  useEffect(() => {
    if (editingReminder) {
      setTitle(editingReminder.title || '');
      setDescription(editingReminder.description || '');
      const parsedDate = new Date(editingReminder.dateTime);
      setDateTime(!isNaN(parsedDate) ? parsedDate.toISOString().slice(0, 16) : '');
    } else {
      setTitle('');
      setDescription('');
      setDateTime('');
    }
  }, [editingReminder]);

  return (
    <form onSubmit={handleSubmit} className="reminder-form">
      <div className="form-group">
        <label>Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Descripción</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Fecha y Hora</label>
        <input
          type="datetime-local"
          value={dateTime}
          onChange={(e) => setDateTime(e.target.value)}
          required
        />
      </div>
      <div className="form-actions">
        {editingReminder ? (
          <>
            <button type="submit">Actualizar Recordatorio</button>
            <button 
              type="button" 
              onClick={() => {
                onCancelEdit();
              }}
            >
              Cancelar
            </button>
          </>
        ) : (
          <button type="submit">Crear Recordatorio</button>
        )}
      </div>
    </form>
  );
}
