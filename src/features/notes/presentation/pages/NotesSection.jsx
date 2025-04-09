import { useNotes } from "../viewmodels/useNotes";

import NoteForm from '../views/NoteForm'
import NotesList from '../views/NotesList'


export default function NotesSection() {
  const {
    notes,
    loading,
    editingNote,
    setEditingNote,
    createNote,
    updateNote,
    deleteNote
  } = useNotes()

  const handleSubmit = (noteData) => {
    if (noteData.id) {
      updateNote(noteData)
    } else {
      createNote(noteData)
    }
  }

  return (
    <div className="section-container">
      <h2 className="section-title">Notas</h2>
      <NotesList
        notes={notes}
        loading={loading}
        onEdit={setEditingNote}
        onDelete={deleteNote}
      />
    </div>
  )
}