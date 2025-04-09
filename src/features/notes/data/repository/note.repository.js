import { NoteDatasource } from "../datasources/note.datasource";

export class NoteRepository {
  constructor() {
    this.datasource = new NoteDatasource();
  }

  getAllNotes() {
    return this.datasource.fetchNotes();
  }

  addNote(note) {
    return this.datasource.createNote(note);
  }

  updateNote(id, note) {
    return this.datasource.updateNote(id, note);
  }

  removeNote(id) {
    return this.datasource.deleteNote(id);
  }
}