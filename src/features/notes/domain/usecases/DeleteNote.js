export class DeleteNote {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }

  execute(id) {
    return this.noteRepository.removeNote(id);
  }
}