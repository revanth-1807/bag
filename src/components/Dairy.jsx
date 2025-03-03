import React, { useState, useEffect } from 'react';
import '../App.css'

function Diary() {
  const [entries, setEntries] = useState(JSON.parse(localStorage.getItem('diaryEntries')) || []);
  const [newEntry, setNewEntry] = useState('');

  useEffect(() => {
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
  }, [entries]);

  const handleAddEntry = () => {
    setEntries([...entries, newEntry]);
    setNewEntry('');
  };

  return (
    <div>
      <h2>Diary</h2>
      <textarea
        value={newEntry}
        onChange={(e) => setNewEntry(e.target.value)}
        placeholder="Write about your day..."
      ></textarea><br /><br />
      <button onClick={handleAddEntry}>Add Entry</button>
      <ul>
        {entries.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
}

export default Diary;
