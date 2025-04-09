export class UpdateNote {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }

  execute(id, note) {
    return this.noteRepository.updateNote(id, note);
  }
}