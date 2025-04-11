import React, { useState, useEffect } from "react";

function NoteForm({ onSubmit, initialNote }) {
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    if (initialNote) {
      setNote(initialNote);
    }
  }, [initialNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
    if (!initialNote) {
      setNote({ title: "", content: "" });
    }
  };

  return React.createElement('form', 
    { onSubmit: handleSubmit, className: "form" },
    React.createElement('input', {
      type: "text",
      name: "title",
      value: note.title,
      onChange: handleChange,
      placeholder: "Título",
      required: true
    }),
    React.createElement('textarea', {
      name: "content",
      value: note.content,
      onChange: handleChange,
      placeholder: "Contenido",
      required: true
    }),
    React.createElement('button', 
      { type: "submit", className: "submit-button" },
      initialNote ? "Actualizar Nota" : "Agregar Nota"
    )
  );
}

export default NoteForm;