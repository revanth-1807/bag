import React from 'react';
import { useDropzone } from 'react-dropzone';

function NotebookSharing() {
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      const fileAsBinaryString = reader.result;
      localStorage.setItem(file.name, fileAsBinaryString);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <h2>Notebook Sharing</h2>
      <div {...getRootProps()} style={{ border: '2px dashed #4CAF50', padding: '20px' }}>
        <input {...getInputProps()} />
        <p>Drag & drop a PDF here, or click to select one</p>
      </div>
    </div>
  );
}

export default NotebookSharing;
