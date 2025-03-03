import React, { useState } from 'react';

function NotebookGetting() {
  const [searchTerm, setSearchTerm] = useState('');
  const notes = Object.keys(localStorage).filter(key => key !== 'username' && key !== 'password' && key !== 'isLoggedIn');
  const filteredNotes = notes.filter(note => note.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h2>Notebook Getting</h2>
      <input
        type="text"
        placeholder="Search notes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredNotes.map(note => (
          <li key={note}>
            <a href={localStorage.getItem(note)} target="_blank" rel="noopener noreferrer">{note}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotebookGetting;
