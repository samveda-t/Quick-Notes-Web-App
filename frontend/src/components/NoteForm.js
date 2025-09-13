import React, { useState } from "react";

function NoteForm({ refreshNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content })
    });
    setTitle("");
    setContent("");
    refreshNotes();
  };

  return (
    <form onSubmit={addNote} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <br />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;
