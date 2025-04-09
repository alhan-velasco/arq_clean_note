export default class Reminder {
  constructor(id, title, description, dateTime) {
    this.id = id
    this.title = title
    this.description = description
    this.dateTime = new Date(dateTime)
  }

  get formattedDate() {
    return this.dateTime.toLocaleString()
  }
}