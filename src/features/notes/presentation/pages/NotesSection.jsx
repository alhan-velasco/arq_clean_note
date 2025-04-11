import { useState } from 'react';
import { useNotes } from "../viewmodels/useNotes";
import NoteForm from '../views/NoteForm';
import NotesList from '../views/NotesList';

export default function NotesSection() {
  const {
    notes,
    loading,
    addNote,
    updateNote,
    removeNote
  } = useNotes();
  
  const [editingNote, setEditingNote] = useState(null);

  return (
    <div className="section-container">
      <h2 className="section-title">Notas</h2>
      <NoteForm 
        onSubmit={(noteData) => {
          if (editingNote) {
            updateNote(editingNote.id, noteData);
            setEditingNote(null);
          } else {
            addNote(noteData);
          }
        }}
        initialNote={editingNote} 
      />
      <NotesList
        notes={notes}
        loading={loading}
        onEdit={setEditingNote}
        onDelete={removeNote}
      />
    </div>
  );
}