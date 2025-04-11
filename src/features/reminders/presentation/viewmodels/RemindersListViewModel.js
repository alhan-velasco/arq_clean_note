import { useMemo } from 'react';

export const useRemindersListViewModel = ({ reminders, loading, onEdit, onDelete }) => {

  const processedReminders = useMemo(() => {
    return reminders.map(reminder => ({
      ...reminder,
    }));
  }, [reminders]);

  const isLoading = loading;

  const handleEdit = (reminder) => {
    console.log('Editando recordatorio:', reminder);
    onEdit({
      id: reminder.ID,
      title: reminder.Title,
      description: reminder.Description,
      dateTime: reminder.DateTime
    });
  };

  const handleDelete = (id) => {
    console.log('Eliminando recordatorio con ID:', id);
    onDelete(id);
  };

  const getContentMessage = () => {
    if (isLoading) return 'Cargando recordatorios...';
    if (processedReminders.length === 0) return 'No hay recordatorios creados';
    return null;
  };

  return {
    processedReminders,
    isLoading,
    contentMessage: getContentMessage(),
    handlers: {
      edit: handleEdit,
      delete: handleDelete
    }
  };
};