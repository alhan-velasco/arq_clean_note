import { useState, useEffect } from 'react';
import React from 'react';

export default function ReminderForm({ 
  onSubmit, 
  editingReminder, 
  onCancelEdit 
}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dateTime, setDateTime] = useState('');

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

  return React.createElement(
    'form',
    {
      onSubmit: handleSubmit,
      className: 'reminder-form'
    },
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement('label', null, 'Título'),
      React.createElement('input', {
        type: 'text',
        value: title,
        onChange: (e) => setTitle(e.target.value),
        required: true
      })
    ),
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement('label', null, 'Descripción'),
      React.createElement('textarea', {
        value: description,
        onChange: (e) => setDescription(e.target.value),
        required: true
      })
    ),
    React.createElement(
      'div',
      { className: 'form-group' },
      React.createElement('label', null, 'Fecha y Hora'),
      React.createElement('input', {
        type: 'datetime-local',
        value: dateTime,
        onChange: (e) => setDateTime(e.target.value),
        required: true
      })
    ),
    React.createElement(
      'div',
      { className: 'form-actions' },
      editingReminder 
        ? [
            React.createElement(
              'button',
              { type: 'submit' },
              'Actualizar Recordatorio'
            ),
            React.createElement(
              'button',
              { 
                type: 'button',
                onClick: () => onCancelEdit()
              },
              'Cancelar'
            )
          ]
        : React.createElement(
            'button',
            { type: 'submit' },
            'Crear Recordatorio'
          )
    )
  );
}