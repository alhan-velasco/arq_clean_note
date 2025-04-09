import { ReminderDatasource } from "../datasources/reminder.datasource";

export default class ReminderRepository {
  constructor() {
    this.datasource = ReminderDatasource; 
  }

  getAllReminders() {
    return this.datasource.getAll();
  }

  addReminder(reminder) {
    return this.datasource.create(reminder);
  }

  updateReminder(id, reminder) {
    return this.datasource.update({ ...reminder, id });
  }

  removeReminder(id) {
    return this.datasource.delete(id);
  }
}
