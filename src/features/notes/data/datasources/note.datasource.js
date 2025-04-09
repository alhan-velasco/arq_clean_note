import { API_BASE_URL } from "../../../../config/apiConfig";

export class NoteDatasource {
  async fetchNotes() {
    const response = await fetch(`${API_BASE_URL}/notes`);
    return response.json();
  }

  async updateNote(id, note) {
    const response = await fetch(`${API_BASE_URL}/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    return response.json();
  }
  
  async searchByTitle(title) {
    const response = await fetch(`${API_BASE_URL}/notes/title/${title}`);
    return response.json();
  }

  async createNote(note) {
    const response = await fetch(`${API_BASE_URL}/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    return response.json();
  }

  async deleteNote(id) {
    await fetch(`${API_BASE_URL}/notes/${id}`, { method: "DELETE" });
  }
}