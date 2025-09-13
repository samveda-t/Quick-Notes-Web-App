import React, { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);

  // Fetch notes from backend
  const fetchNotes = async () => {
    const res = await fetch("http://localhost:5000/api/notes");
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => { fetchNotes(); }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Quick Notes App</h1>
      <NoteForm refreshNotes={fetchNotes} />
      <NoteList notes={notes} refreshNotes={fetchNotes} />
    </div>
  );
}

export default App;
