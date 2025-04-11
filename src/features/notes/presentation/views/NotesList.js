import React, { useState } from "react";
import { useNotes } from "../viewmodels/useNotes";
import NoteForm from "./NoteForm";

function NotesList({ notes, loading, onEdit, onDelete }) {
  if (loading) {
    return React.createElement('p', null, 'Cargando notas...');
  }

  if (notes.length === 0) {
    return React.createElement('p', null, 'No hay notas disponibles.');
  }

  return React.createElement('div', { className: "list-container" },
    notes.map((note, index) => 
      React.createElement('div', 
        { key: note.id ?? `temp-${index}`, className: "card" },
        React.createElement('h3', null, note.title),
        React.createElement('p', null, note.content),
        React.createElement('div', { className: "card-actions" },
          React.createElement('button', { 
            className: "edit-button",
            onClick: () => onEdit(note)
          }, 'Editar'),
          React.createElement('button', { 
            className: "delete-button",
            onClick: () => onDelete(note.id)
          }, 'Eliminar')
        )
      )
    )
  );
}

export default NotesList;