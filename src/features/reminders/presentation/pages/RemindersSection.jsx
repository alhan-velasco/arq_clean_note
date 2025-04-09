import useReminders from '../viewmodels/useReminders';
import ReminderForm from '../views/RemindersForm';
import RemindersList from '../views/RemindersList';

export default function RemindersSection() {
  const {
    reminders,
    loading,
    editingReminder,
    setEditingReminder,
    createReminder,
    updateReminder,
    deleteReminder
  } = useReminders();

  const handleSubmit = (reminderData) => {
    if (reminderData.id) {
      updateReminder(reminderData); // Aquí se actualiza el recordatorio
    } else {
      createReminder(reminderData); // Aquí se crea el recordatorio
    }
  };

  return (
    <div className="section-container">
      <h2 className="section-title">Recordatorios</h2>
      <ReminderForm
        onSubmit={handleSubmit}
        editingReminder={editingReminder}
        onCancelEdit={() => setEditingReminder(null)} // Cancela la edición
      />
      <RemindersList
        reminders={reminders}
        loading={loading}
        onEdit={setEditingReminder} // Aquí se pasa la función de edición
        onDelete={deleteReminder}
      />
    </div>
  );
}
