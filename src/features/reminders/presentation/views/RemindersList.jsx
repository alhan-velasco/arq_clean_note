export default function RemindersList({ 
  reminders, 
  loading, 
  onEdit, 
  onDelete 
}) {
  if (loading) return <p>Cargando recordatorios...</p>;
  if (reminders.length === 0) return <p>No hay recordatorios creados</p>;

  return (
    <div className="list-container">
      {reminders.map((reminder, index) => {
        console.log('Reminder:', reminder);
        return (
          <div key={reminder.ID || index} className="item-card">
            <h3>{reminder.Title}</h3>
            <p>{reminder.Description}</p>
            <p className="reminder-date">{reminder.DateTime}</p>
            <div className="item-actions">
              <button onClick={() => onEdit({
                id: reminder.ID,
                title: reminder.Title,
                description: reminder.Description,
                dateTime: reminder.DateTime
              })}>
                Editar
              </button>
              <button 
                className="delete" 
                onClick={() => onDelete(reminder.ID)}
              >
                Eliminar
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}