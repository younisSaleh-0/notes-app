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


  const [searchText, setSearchText] = useState("");

  return (
    <div className="container">
      <Search handleSearchNote={setSearchText} />
      <NotesList
      // filter based on our search
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
