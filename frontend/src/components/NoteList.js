import React from "react";

function NoteList({ notes, refreshNotes }) {
  const deleteNote = async (id) => {
    await fetch(`http://localhost:5000/api/notes/${id}`, { method: "DELETE" });
    refreshNotes();
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note._id} style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={() => deleteNote(note._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
