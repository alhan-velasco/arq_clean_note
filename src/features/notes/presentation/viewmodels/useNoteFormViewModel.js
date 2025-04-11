import { useState, useEffect } from 'react';

export const useNoteFormViewModel = ({ onSubmit, initialNote }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  useEffect(() => {
    if (initialNote) {
      setNote(initialNote);
    }
  }, [initialNote]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(note);
    if (!initialNote) {
      resetForm();
    }
  };

  const resetForm = () => {
    setNote({ title: "", content: "" });
  };

  return {
    formData: note,
    isEditing: !!initialNote,
    handlers: {
      handleChange,
      handleSubmit
    }
  };
};