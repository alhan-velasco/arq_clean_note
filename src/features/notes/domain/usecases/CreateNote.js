export class CreateNote {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }

  execute(note) {
    return this.noteRepository.addNote(note);
  }
}