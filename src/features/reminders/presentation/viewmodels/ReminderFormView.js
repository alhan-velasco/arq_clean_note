import { useState, useEffect } from 'react';

export const useReminderFormViewModel = ({ onSubmit, editingReminder, onCancelEdit }) => {
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

    if (!editingReminder) {
      resetForm();
    }
  };

  const resetForm = () => {
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
      resetForm();
    }
  }, [editingReminder]);

  return {
    title,
    description,
    dateTime,
    isEditing: !!editingReminder,
    handlers: {
      setTitle,
      setDescription,
      setDateTime,
      handleSubmit,
      onCancelEdit
    }
  };
};