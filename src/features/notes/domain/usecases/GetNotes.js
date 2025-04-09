export class GetNotes {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }

  execute() {
    return this.noteRepository.getAllNotes();
  }
}