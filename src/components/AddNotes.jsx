import React, { useState } from "react";

const AddNotes = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setNoteText(e.target.value);
  };

  const handleSaveClick = () => {
    handleAddNote(noteText);
  };

  return (
    <div className="note new">
      <textarea
        placeholder="Add a note..."
        cols="10"
        rows="8"
        value={noteText}
        onChange={handleChange}
      ></textarea>
      <div className="note-footer">
        <small>200 Remaining</small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNotes;
