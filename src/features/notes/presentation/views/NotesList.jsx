import React, { useState } from "react"; 
import { useNotes } from "../viewmodels/useNotes";
import NoteForm from "./NoteForm";

export default function NotesSection() {
  const { notes, addNote, updateNote, removeNote } = useNotes();
  const [editingNote, setEditingNote] = useState(null);

  const handleSubmit = (note) => {
    if (editingNote) {
      updateNote(editingNote.id, note);
      setEditingNote(null);
    } else {
      addNote(note);
    }
  };

  return (
    <div className="section">
      <h2>Mis Notas</h2>
      <NoteForm onSubmit={handleSubmit} initialNote={editingNote} />
      
      <div className="cards-container">
        {notes.length === 0 ? (
          <p>No hay notas disponibles.</p>
        ) : (
          notes.map((note, index) => (
            <div key={note.id ?? `temp-${index}`} className="card">
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <div className="card-actions">
                <button 
                  className="edit-button"
                  onClick={() => setEditingNote(note)}
                >
                  Editar
                </button>
                <button 
                  className="delete-button"
                  onClick={() => removeNote(note.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
