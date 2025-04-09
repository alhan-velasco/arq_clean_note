import { useEffect, useState } from "react";
import { GetNotes } from "../../domain/usecases/GetNotes";
import { CreateNote } from "../../domain/usecases/CreateNote";
import { DeleteNote } from "../../domain/usecases/DeleteNote";
import { UpdateNote } from "../../domain/usecases/UpdateNote";
import { NoteRepository } from "../../data/repository/note.repository";

const noteRepo = new NoteRepository();

export function useNotes() {
  const [notes, setNotes] = useState([]);

  const refreshNotes = async () => {
    console.log("Obteniendo notas...");
    try {
      const data = await new GetNotes(noteRepo).execute();
      console.log("Datos recibidos:", data);

      const formattedNotes = data.map(note => ({
        id: note.ID,  
        title: note.Title, 
        content: note.Content, 
      }));

      setNotes(formattedNotes);
    } catch (error) {
      console.error("Error al obtener las notas:", error);
    }
  };

  useEffect(() => {
    refreshNotes();
  }, []);

  const addNote = async (note) => {
    try {
      await new CreateNote(noteRepo).execute(note);
      refreshNotes();
    } catch (error) {
      console.error("Error al agregar la nota:", error);
    }
  };

  const updateNote = async (id, note) => {
    try {
      await new UpdateNote(noteRepo).execute(id, note);
      refreshNotes();
    } catch (error) {
      console.error("Error al actualizar la nota:", error);
    }
  };

  const removeNote = async (id) => {
    try {
      await new DeleteNote(noteRepo).execute(id);
      refreshNotes();
    } catch (error) {
      console.error("Error al eliminar la nota:", error);
    }
  };

  return { notes, addNote, updateNote, removeNote, refreshNotes };
}
