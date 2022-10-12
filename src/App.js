import React, { useState } from "react";
import NotesList from "./components/NodesList";
import { nanoid } from "nanoid";
import Search from "./components/Search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "12/04/22",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "15/04/22",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "28/04/22",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "01/05/22",
    },
  ]);

  const addNote = (text) => {
    // console.log(text);
    const newDate = new Date();

    const newNote = {
      id: nanoid(),
      text: text,
      date: newDate.toLocaleDateString(),
    };

    // create a new array, add the exciting array and save is to our setNotes
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="container">
      <Search />
      <NotesList
        notes={notes}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
