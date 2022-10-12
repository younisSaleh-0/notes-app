import React, { useState } from "react";

const AddNotes = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;

  const handleChange = (e) => {
    e.preventDefault();

    // it cant be less than 0, 
    if(characterLimit - e.target.value.length >= 0){
        setNoteText(e.target.value);
    } 
    
  };

  const handleSaveClick = () => {
    // check if is not empty
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    } else {
      alert("You can save empty note :(");
    }
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
        <small>{characterLimit - noteText.length}</small>
        <button onClick={handleSaveClick} className="save">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNotes;
