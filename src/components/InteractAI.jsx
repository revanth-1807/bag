import React, { useState } from 'react';

function InteractAI() {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAiResponse] = useState('');

  const handleInteract = async () => {
    // Simulate interaction with OpenAI (You would typically use a real API request here)
    const response = `You said: ${userInput}`;
    setAiResponse(response);
    setUserInput('');
  };

  return (
    <div>
      <h2>Interact with AI</h2>
      <textarea
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        placeholder="Share your thoughts..."
      ></textarea><br /><br />
      <button onClick={handleInteract}>Interact</button>
      {aiResponse && <p>{aiResponse}</p>}
    </div>
  );
}

export default InteractAI;
