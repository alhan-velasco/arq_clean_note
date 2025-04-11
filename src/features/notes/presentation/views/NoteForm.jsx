import React from 'react';
import { useNoteFormViewModel } from '../viewmodels/useNoteFormViewModel';

const NoteForm = ({ onSubmit, initialNote }) => {
  const {
    formData,
    isEditing,
    handlers
  } = useNoteFormViewModel({ onSubmit, initialNote });

  return (
    <form onSubmit={handlers.handleSubmit} className="note-form">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handlers.handleChange}
        placeholder="Título"
        required
      />
      <textarea
        name="content"
        value={formData.content}
        onChange={handlers.handleChange}
        placeholder="Contenido"
        required
      />
      <button type="submit" className="submit-button">
        {isEditing ? "Actualizar Nota" : "Agregar Nota"}
      </button>
    </form>
  );
};

export default NoteForm;