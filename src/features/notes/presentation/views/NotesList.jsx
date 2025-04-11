import React from 'react';
import { useNotesListViewModel } from '../viewmodels/useNotesListViewModel';

const NotesList = ({ notes, loading, onEdit, onDelete }) => {
  const {
    notes: noteItems,
    contentMessage,
    handlers
  } = useNotesListViewModel({ notes, loading, onEdit, onDelete });

  if (contentMessage) {
    return <p className="message">{contentMessage}</p>;
  }

  return (
    <div className="notes-list">
      {noteItems.map((note) => (
        <div key={note.id || `temp-${note.tempId}`} className="note-card">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <div className="note-actions">
            <button 
              onClick={() => handlers.onEdit(note)}
              className="edit-button"
            >
              Editar
            </button>
            <button 
              onClick={() => handlers.onDelete(note.id)}
              className="delete-button"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotesList;