import React from "react";

const Header = ({ handleToggleDarkMode }) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          handleToggleDarkMode(
            (prevDarkMode) => !prevDarkMode // set out state to the true or false depending on the state
          )
        }
        className="save"
      >
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
